from flask import Flask, request, jsonify, send_from_directory, send_file
from flask_cors import CORS
import os
import sys
import logging
import uuid
import shutil
from datetime import datetime, timedelta
from werkzeug.utils import secure_filename
from utils.docx_processor import DocxProcessor
from utils.format_config import FormatConfig

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# 设置全局异常捕获
def global_exception_handler(exctype, value, traceback):
    logging.critical("未捕获的全局异常", exc_info=(exctype, value, traceback))
sys.excepthook = global_exception_handler

# 严格按照如下方式配置静态资源
static_folder = '../frontend/public' if os.path.exists('../frontend/public') else '../frontend/dist'
app = Flask(__name__, static_folder=static_folder, static_url_path='/')
CORS(app)

# 配置
UPLOAD_FOLDER = 'temp_uploads'
ALLOWED_EXTENSIONS = {'docx'}
MAX_FILE_SIZE = 20 * 1024 * 1024  # 20MB

# 确保上传目录存在
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# 内存存储
file_storage = {}

def allowed_file(filename):
    """检查文件扩展名是否允许"""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def cleanup_old_files():
    """清理超过1小时的临时文件"""
    try:
        current_time = datetime.now()
        for file_id, file_info in list(file_storage.items()):
            if current_time - file_info['created_at'] > timedelta(hours=1):
                file_path = file_info['path']
                if os.path.exists(file_path):
                    os.remove(file_path)
                del file_storage[file_id]
                logger.info(f"清理过期文件: {file_id}")
    except Exception as e:
        logger.error(f"清理文件失败: {str(e)}")

@app.route('/api/upload', methods=['POST'])
def upload_file():
    """文件上传接口"""
    try:
        cleanup_old_files()
        
        if 'file' not in request.files:
            return jsonify({'error': '未找到上传文件'}), 400
        
        file = request.files['file']
        
        if file.filename == '':
            return jsonify({'error': '未选择文件'}), 400
        
        if not allowed_file(file.filename):
            return jsonify({'error': '仅支持.docx格式文件'}), 400
        
        # 检查文件大小
        file.seek(0, os.SEEK_END)
        file_size = file.tell()
        file.seek(0)
        
        if file_size > MAX_FILE_SIZE:
            return jsonify({'error': f'文件大小超过限制(最大20MB)'}), 400
        
        # 生成唯一文件ID
        file_id = str(uuid.uuid4())
        filename = secure_filename(file.filename)
        file_path = os.path.join(UPLOAD_FOLDER, f"{file_id}_{filename}")
        
        # 保存文件
        file.save(file_path)
        
        # 存储文件信息
        file_storage[file_id] = {
            'path': file_path,
            'original_name': filename,
            'size': file_size,
            'created_at': datetime.now()
        }
        
        logger.info(f"文件上传成功: {file_id} - {filename}")
        
        return jsonify({
            'file_id': file_id,
            'filename': filename,
            'size': file_size
        }), 200
        
    except Exception as e:
        logger.error(f"文件上传失败: {str(e)}")
        return jsonify({'error': f'文件上传失败: {str(e)}'}), 500

@app.route('/api/check', methods=['POST'])
def check_format():
    """格式检查接口"""
    try:
        data = request.get_json()
        
        if not data or 'file_id' not in data:
            return jsonify({'error': '缺少file_id参数'}), 400
        
        file_id = data['file_id']
        
        if file_id not in file_storage:
            return jsonify({'error': '文件不存在或已过期'}), 404
        
        file_info = file_storage[file_id]
        file_path = file_info['path']
        
        if not os.path.exists(file_path):
            return jsonify({'error': '文件不存在'}), 404
        
        # 获取或合并格式配置
        custom_config = data.get('format_config', {})
        format_config = FormatConfig.merge_config(custom_config)
        
        # 验证配置
        is_valid, error_msg = FormatConfig.validate_config(format_config)
        if not is_valid:
            return jsonify({'error': f'格式配置错误: {error_msg}'}), 400
        
        # 执行格式检查
        processor = DocxProcessor(file_path)
        report = processor.check_format(format_config)
        
        logger.info(f"格式检查完成: {file_id} - 合格率 {report['pass_rate']}%")
        
        return jsonify(report), 200
        
    except ValueError as e:
        logger.error(f"格式检查失败: {str(e)}")
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        logger.error(f"格式检查失败: {str(e)}")
        return jsonify({'error': f'格式检查失败: {str(e)}'}), 500

@app.route('/api/format', methods=['POST'])
def format_document():
    """一键排版接口"""
    try:
        data = request.get_json()
        
        if not data or 'file_id' not in data:
            return jsonify({'error': '缺少file_id参数'}), 400
        
        file_id = data['file_id']
        
        if file_id not in file_storage:
            return jsonify({'error': '文件不存在或已过期'}), 404
        
        file_info = file_storage[file_id]
        file_path = file_info['path']
        
        if not os.path.exists(file_path):
            return jsonify({'error': '文件不存在'}), 404
        
        # 获取或合并格式配置
        custom_config = data.get('format_config', {})
        format_config = FormatConfig.merge_config(custom_config)
        
        # 验证配置
        is_valid, error_msg = FormatConfig.validate_config(format_config)
        if not is_valid:
            return jsonify({'error': f'格式配置错误: {error_msg}'}), 400
        
        # 生成输出文件路径
        formatted_file_id = str(uuid.uuid4())
        original_name = file_info['original_name']
        name_without_ext = os.path.splitext(original_name)[0]
        formatted_filename = f"{name_without_ext}_已排版.docx"
        formatted_path = os.path.join(UPLOAD_FOLDER, f"{formatted_file_id}_{formatted_filename}")
        
        # 执行排版
        processor = DocxProcessor(file_path)
        processor.format_document(format_config, formatted_path)
        
        # 存储排版后的文件信息
        file_storage[formatted_file_id] = {
            'path': formatted_path,
            'original_name': formatted_filename,
            'size': os.path.getsize(formatted_path),
            'created_at': datetime.now()
        }
        
        logger.info(f"文档排版完成: {file_id} -> {formatted_file_id}")
        
        return jsonify({
            'formatted_file_id': formatted_file_id,
            'filename': formatted_filename,
            'message': '排版完成'
        }), 200
        
    except ValueError as e:
        logger.error(f"文档排版失败: {str(e)}")
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        logger.error(f"文档排版失败: {str(e)}")
        return jsonify({'error': f'文档排版失败: {str(e)}'}), 500

@app.route('/api/download/<file_id>', methods=['GET'])
def download_file(file_id):
    """文件下载接口"""
    try:
        if file_id not in file_storage:
            return jsonify({'error': '文件不存在或已过期'}), 404
        
        file_info = file_storage[file_id]
        file_path = file_info['path']
        
        if not os.path.exists(file_path):
            return jsonify({'error': '文件不存在'}), 404
        
        logger.info(f"文件下载: {file_id} - {file_info['original_name']}")
        
        return send_file(
            file_path,
            as_attachment=True,
            download_name=file_info['original_name'],
            mimetype='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        )
        
    except Exception as e:
        logger.error(f"文件下载失败: {str(e)}")
        return jsonify({'error': f'文件下载失败: {str(e)}'}), 500

@app.route('/api/templates', methods=['GET'])
def get_templates():
    """获取格式模板列表"""
    try:
        templates = FormatConfig.get_preset_templates()
        
        template_list = []
        for name, config in templates.items():
            template_list.append({
                'name': name,
                'description': f'{name}格式模板',
                'config': config
            })
        
        return jsonify({
            'templates': template_list,
            'default': '国标通用'
        }), 200
        
    except Exception as e:
        logger.error(f"获取模板失败: {str(e)}")
        return jsonify({'error': f'获取模板失败: {str(e)}'}), 500

@app.route('/api/export-config', methods=['POST'])
def export_config():
    """导出格式配置"""
    try:
        data = request.get_json()
        config = data.get('config', FormatConfig.get_default_config())
        
        config_json = FormatConfig.export_config(config)
        
        return jsonify({
            'config_json': config_json
        }), 200
        
    except Exception as e:
        logger.error(f"导出配置失败: {str(e)}")
        return jsonify({'error': f'导出配置失败: {str(e)}'}), 500

@app.route('/api/import-config', methods=['POST'])
def import_config():
    """导入格式配置"""
    try:
        data = request.get_json()
        
        if not data or 'config_json' not in data:
            return jsonify({'error': '缺少config_json参数'}), 400
        
        config_json = data['config_json']
        config = FormatConfig.import_config(config_json)
        
        return jsonify({
            'config': config,
            'message': '配置导入成功'
        }), 200
        
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        logger.error(f"导入配置失败: {str(e)}")
        return jsonify({'error': f'导入配置失败: {str(e)}'}), 500

@app.route('/')
@app.route('/<path:path>')
def serve_static(path="index.html"):
    """提供静态文件服务"""
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return app.send_static_file('index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 3000))
    logger.info(f"启动服务器在端口 {port}")
    app.run(host='0.0.0.0', port=port, debug=True)