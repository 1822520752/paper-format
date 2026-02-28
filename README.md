# 论文格 - 毕业论文格式一键排版工具

<div align="center">

![论文格](https://img.shields.io/badge/论文格-毕业论文排版工具-blue)
![Python](https://img.shields.io/badge/Python-3.8+-green)
![Flask](https://img.shields.io/badge/Flask-2.0+-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

**让论文格式规范变简单**

[在线体验](#) | [功能特性](#功能特性) | [快速开始](#快速开始)

</div>

---

## 📖 项目简介

**论文格** 是一款专为高校毕业生设计的论文格式检查与一键排版工具。支持 Word 文档（.docx）格式，帮助用户快速检查论文格式是否符合国标要求，并支持一键自动排版。

<div align="center">
  <img src="https://via.placeholder.com/800x450?text=论文格+界面预览" alt="界面预览" width="80%">
</div>

## ✨ 功能特性

### 🔍 格式检查
- **页面设置检查** - 自动检测页边距是否符合要求
- **标题格式检查** - 检查各级标题字体、字号、对齐方式
- **正文格式检查** - 检查正文字体、字号、行距、首行缩进
- **摘要格式检查** - 检查中英文摘要格式
- **图表标题检查** - 检查图表标题格式规范性
- **参考文献检查** - 检查参考文献格式

### 🎨 一键排版
- 自动应用国标论文格式
- 支持自定义格式配置
- 一键生成符合规范的论文文档

### 📋 预设模板
- 国标通用模板
- 理工科论文模板
- 文科论文模板

## 🚀 快速开始

### 环境要求

- Python 3.8+
- pip

### 安装依赖

```bash
cd backend
pip install -r requirements.txt
```

### 启动服务

```bash
python app.py
```

服务将在 `http://localhost:3000` 启动

### 使用方法

1. 打开浏览器访问 `http://localhost:3000`
2. 上传 Word 文档（.docx 格式）
3. 点击"格式检查"查看格式问题
4. 点击"一键排版"自动修正格式
5. 下载排版后的文档

## 📁 项目结构

```
paper-format/
├── backend/                # 后端服务
│   ├── app.py             # Flask 主应用
│   ├── requirements.txt   # Python 依赖
│   ├── utils/             # 工具模块
│   │   ├── docx_processor.py    # Word 文档处理器
│   │   └── format_config.py     # 格式配置管理
│   └── temp_uploads/      # 临时文件目录
├── frontend/              # 前端界面
│   └── public/
│       ├── index.html     # 主页面
│       ├── css/           # 样式文件
│       └── js/            # JavaScript 文件
└── README.md              # 项目说明
```

## ⚙️ 配置说明

### 默认格式配置（国标通用）

| 设置项 | 默认值 |
|--------|--------|
| 上页边距 | 2.5 cm |
| 下页边距 | 2.5 cm |
| 左页边距 | 3.0 cm |
| 右页边距 | 2.5 cm |
| 正文字体 | 宋体 12pt |
| 一级标题 | 黑体 16pt 居中 |
| 二级标题 | 黑体 14pt 左对齐 |
| 三级标题 | 黑体 12pt 左对齐 |
| 行距 | 1.5 倍行距 |
| 首行缩进 | 2 字符 |

### 自定义配置

支持通过 JSON 格式自定义格式配置，可调整：
- 页面设置（页边距、纸张大小）
- 字体设置（中英文字体）
- 各级标题格式
- 正文格式
- 页眉页脚

## 🔧 API 接口

| 接口 | 方法 | 说明 |
|------|------|------|
| `/api/upload` | POST | 上传文档 |
| `/api/check` | POST | 格式检查 |
| `/api/format` | POST | 一键排版 |
| `/api/download/<file_id>` | GET | 下载文档 |
| `/api/templates` | GET | 获取预设模板 |

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 开源协议

本项目采用 [MIT](LICENSE) 协议开源。

## 👤 作者

**试界 TryWorld**

- GitHub: [@1822520752](https://github.com/1822520752)

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给一个 Star！**

Made with ❤️ by 试界 TryWorld

</div>
