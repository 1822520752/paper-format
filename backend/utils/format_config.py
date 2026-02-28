import json
from typing import Dict, Any, Tuple

class FormatConfig:
    """格式配置管理类，处理默认模板和用户自定义参数"""
    
    # 默认国标通用论文格式配置
    DEFAULT_CONFIG = {
        "page_settings": {
            "top_margin": 2.5,
            "bottom_margin": 2.5,
            "left_margin": 3.0,
            "right_margin": 2.5,
            "paper_size": "A4"
        },
        "fonts": {
            "chinese_font": "宋体",
            "english_font": "Times New Roman",
            "title_chinese_font": "黑体",
            "title_english_font": "Times New Roman"
        },
        "heading1": {
            "font_name": "黑体",
            "font_size": 16,
            "bold": True,
            "alignment": "center",
            "space_before": 1,
            "space_after": 1
        },
        "heading2": {
            "font_name": "黑体",
            "font_size": 14,
            "bold": True,
            "alignment": "left",
            "space_before": 0.5,
            "space_after": 0
        },
        "heading3": {
            "font_name": "黑体",
            "font_size": 12,
            "bold": True,
            "alignment": "left",
            "space_before": 0,
            "space_after": 0
        },
        "body": {
            "font_name": "宋体",
            "font_size": 12,
            "line_spacing": 1.5,
            "line_spacing_type": "multiple",
            "first_line_indent": 2
        },
        "abstract_title": {
            "chinese": {
                "font_name": "黑体",
                "font_size": 18,
                "bold": True,
                "alignment": "center"
            },
            "english": {
                "font_name": "Times New Roman",
                "font_size": 18,
                "bold": True,
                "alignment": "center"
            }
        },
        "abstract_body": {
            "chinese": {
                "font_name": "宋体",
                "font_size": 12,
                "line_spacing": 1.5
            },
            "english": {
                "font_name": "Times New Roman",
                "font_size": 12,
                "line_spacing": 1.5
            }
        },
        "figure_caption": {
            "font_name": "宋体",
            "font_size": 10.5,
            "alignment": "center"
        },
        "header": {
            "font_name": "宋体",
            "font_size": 9,
            "alignment": "center",
            "content": ""
        },
        "footer": {
            "alignment": "center",
            "page_number_format": "arabic"
        },
        "reference": {
            "title_font_name": "黑体",
            "title_font_size": 16,
            "body_font_name": "宋体",
            "body_font_size": 10.5,
            "number_format": "[{}]"
        }
    }
    
    # 字号映射表：中文字号 -> pt值
    FONT_SIZE_MAP = {
        "初号": 42,
        "小初": 36,
        "一号": 26,
        "小一": 24,
        "二号": 22,
        "小二": 18,
        "三号": 16,
        "小三": 15,
        "四号": 14,
        "小四": 12,
        "五号": 10.5,
        "小五": 9
    }
    
    @staticmethod
    def get_default_config() -> Dict[str, Any]:
        """获取默认配置"""
        return FormatConfig.DEFAULT_CONFIG.copy()
    
    @staticmethod
    def merge_config(custom_config: Dict[str, Any]) -> Dict[str, Any]:
        """
        合并自定义配置和默认配置
        
        Args:
            custom_config: 用户自定义配置
            
        Returns:
            合并后的完整配置
        """
        merged_config = FormatConfig.DEFAULT_CONFIG.copy()
        
        if not custom_config:
            return merged_config
        
        # 深度合并配置
        def deep_merge(base: dict, update: dict) -> dict:
            for key, value in update.items():
                if key in base and isinstance(base[key], dict) and isinstance(value, dict):
                    base[key] = deep_merge(base[key], value)
                else:
                    base[key] = value
            return base
        
        return deep_merge(merged_config, custom_config)
    
    @staticmethod
    def validate_config(config: Dict[str, Any]) -> Tuple[bool, str]:
        """
        验证配置合法性
        
        Args:
            config: 待验证的配置
            
        Returns:
            (是否合法, 错误信息)
        """
        try:
            # 验证页边距
            if "page_settings" in config:
                margins = config["page_settings"]
                for key in ["top_margin", "bottom_margin", "left_margin", "right_margin"]:
                    if key in margins:
                        value = margins[key]
                        if not isinstance(value, (int, float)) or value <= 0 or value > 10:
                            return False, f"页边距{key}必须在0-10cm之间"
            
            # 验证字号
            for section in ["heading1", "heading2", "heading3", "body", "figure_caption"]:
                if section in config and "font_size" in config[section]:
                    font_size = config[section]["font_size"]
                    if not isinstance(font_size, (int, float)) or font_size <= 0 or font_size > 72:
                        return False, f"{section}字号必须在0-72pt之间"
            
            # 验证行距
            if "body" in config and "line_spacing" in config["body"]:
                line_spacing = config["body"]["line_spacing"]
                if not isinstance(line_spacing, (int, float)) or line_spacing <= 0:
                    return False, "行距必须大于0"
            
            # 验证首行缩进
            if "body" in config and "first_line_indent" in config["body"]:
                indent = config["body"]["first_line_indent"]
                if not isinstance(indent, (int, float)) or indent < 0:
                    return False, "首行缩进必须大于等于0"
            
            return True, ""
            
        except Exception as e:
            return False, f"配置验证失败: {str(e)}"
    
    @staticmethod
    def export_config(config: Dict[str, Any]) -> str:
        """
        导出配置为JSON字符串
        
        Args:
            config: 配置字典
            
        Returns:
            JSON格式的配置字符串
        """
        return json.dumps(config, ensure_ascii=False, indent=2)
    
    @staticmethod
    def import_config(json_str: str) -> Dict[str, Any]:
        """
        从JSON字符串导入配置
        
        Args:
            json_str: JSON格式的配置字符串
            
        Returns:
            配置字典
        """
        try:
            config = json.loads(json_str)
            is_valid, error_msg = FormatConfig.validate_config(config)
            if not is_valid:
                raise ValueError(error_msg)
            return FormatConfig.merge_config(config)
        except json.JSONDecodeError as e:
            raise ValueError(f"JSON解析失败: {str(e)}")
        except Exception as e:
            raise ValueError(f"配置导入失败: {str(e)}")
    
    @staticmethod
    def get_font_size_pt(font_size_name: str) -> float:
        """
        将中文字号名称转换为pt值
        
        Args:
            font_size_name: 中文字号名称（如"小四"）
            
        Returns:
            对应的pt值
        """
        return FormatConfig.FONT_SIZE_MAP.get(font_size_name, 12)
    
    @staticmethod
    def get_preset_templates() -> Dict[str, Dict[str, Any]]:
        """
        获取预设模板列表
        
        Returns:
            预设模板字典
        """
        return {
            "国标通用": FormatConfig.DEFAULT_CONFIG,
            "理工科论文": {
                **FormatConfig.DEFAULT_CONFIG,
                "body": {
                    **FormatConfig.DEFAULT_CONFIG["body"],
                    "line_spacing": 1.25,
                    "font_size": 12
                }
            },
            "文科论文": {
                **FormatConfig.DEFAULT_CONFIG,
                "body": {
                    **FormatConfig.DEFAULT_CONFIG["body"],
                    "line_spacing": 2.0,
                    "font_size": 12
                },
                "fonts": {
                    "chinese_font": "仿宋",
                    "english_font": "Times New Roman",
                    "title_chinese_font": "黑体",
                    "title_english_font": "Times New Roman"
                }
            }
        }