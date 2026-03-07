<div align="center">

[English](README.md) · [中文](README_zh.md)

</div>

---

<div align="center">

<img src="https://img.shields.io/badge/论文格-毕业论文排版工具-4A90D9?style=for-the-badge&logo=googledocs&logoColor=white" alt="论文格">

# 📝 论文格

### **毕业论文格式一键排版工具**

*让论文格式规范变简单 · 让毕业更轻松*

[![Python Version](https://img.shields.io/badge/Python-3.8+-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-2.0+-000000?style=flat-square&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/License-MIT-success?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/1822520752/paper-format?style=flat-square&logo=github&color=yellow)](https://github.com/1822520752/paper-format/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/1822520752/paper-format?style=flat-square&logo=github)](https://github.com/1822520752/paper-format/issues)

**[🚀 在线体验](https://paperformat-zx1822520752.app.haisnap.com/) · [📖 使用文档](#使用指南) · [🐛 反馈问题](https://github.com/1822520752/paper-format/issues) · [💡 功能建议](https://github.com/1822520752/paper-format/issues)**

</div>

---

## 📖 项目背景

### 为什么开发这个工具？

每到毕业季，无数高校毕业生都要面对繁琐的论文格式调整工作：

> 😫 "页边距要调，字体要改，行距要设置……"
> 
> 😫 "参考文献格式又不对，图表标题位置不对……"
> 
> 😫 "改了半天还是不符合学校要求……"

**论文格** 就是为了解决这些痛点而生！

### 我们的目标

- ✅ **解放双手** - 告别繁琐的手动格式调整
- ✅ **提高效率** - 一键完成格式检查与排版
- ✅ **规范统一** - 严格遵循国标 GB/T 7713.1-2006
- ✅ **简单易用** - 无需安装，网页端即可使用

---

## ✨ 核心功能

### 🔍 智能格式检查

| 检查项目 | 检查内容 | 检测精度 |
|:---:|:---|:---:|
| 📄 **页面设置** | 上/下/左/右页边距、纸张大小 | 0.1cm |
| 🔤 **标题格式** | 一级/二级/三级标题字体、字号、加粗、对齐 | 精确 |
| 📝 **正文格式** | 正文字体、字号、行距、首行缩进 | 精确 |
| 📋 **摘要格式** | 中英文摘要标题、正文格式 | 精确 |
| 🖼️ **图表标题** | 图题、表题字体、字号、位置 | 精确 |
| 📚 **参考文献** | 参考文献标题、正文格式 | 精确 |
| 📑 **页眉页脚** | 页眉内容、页码格式 | 精确 |

### 🎨 一键智能排版

| 功能 | 描述 |
|:---:|:---|
| 🎯 **自动识别** | 智能识别标题、正文、摘要等不同内容 |
| ⚡ **批量处理** | 一次性完成所有格式调整 |
| 🔧 **自定义配置** | 支持自定义格式参数 |
| 📥 **保留内容** | 排版过程不改变原文内容 |
| 💾 **即时下载** | 排版完成即可下载 |

### 📋 预设模板

| 模板名称 | 适用场景 | 页边距 | 行距 | 正文字体 |
|:---:|:---|:---:|:---:|:---:|
| 🎓 **国标通用** | 大多数高校 | 2.5/2.5/3.0/2.5 | 1.5倍 | 宋体 |

---

## 🎮 功能演示

### 使用流程

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   📤 上传   │ ─► │   🔍 检查   │ ─► │   ✨ 排版   │ ─► │   📥 下载   │
│   Word文档  │    │   格式问题  │    │   一键修正  │    │   规范文档  │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

---

## 🚀 快速开始

### 环境要求

| 环境 | 版本 | 说明 |
|:---:|:---:|:---|
| Python | 3.8+ | 推荐 3.10 或 3.11 |
| pip | 最新版 | Python 包管理器 |
| 操作系统 | Windows/macOS/Linux | 跨平台支持 |

### 安装步骤

```bash
# 克隆项目
git clone https://github.com/1822520752/paper-format.git

# 进入后端目录
cd paper-format/backend

# 安装依赖
pip install -r requirements.txt

# 启动服务
python app.py
```

### 访问应用

打开浏览器访问：**http://localhost:3000**

---

## 📋 使用指南

### 步骤一：上传文档

1. 点击上传区域或拖拽 .docx 格式的论文文档
2. 等待上传完成

> ⚠️ **注意**：仅支持 .docx 格式，不支持 .doc 格式

### 步骤二：检查格式

1. 点击「格式检查」按钮
2. 查看检查报告，了解格式问题

### 步骤三：一键排版

1. 点击「一键排版」按钮
2. 等待排版完成

### 步骤四：下载文档

1. 点击「下载」按钮
2. 获取格式规范的文档

---

## ⚙️ 配置说明

### 默认配置（国标通用）

| 设置项 | 默认值 |
|:---|:---:|
| 上页边距 | 2.5 cm |
| 下页边距 | 2.5 cm |
| 左页边距 | 3.0 cm |
| 右页边距 | 2.5 cm |
| 正文字体 | 宋体 12pt |
| 一级标题 | 黑体 16pt 居中加粗 |
| 二级标题 | 黑体 14pt 左对齐加粗 |
| 三级标题 | 黑体 12pt 左对齐加粗 |
| 行距 | 1.5 倍 |
| 首行缩进 | 2 字符 |

---

## 📁 项目结构

```
paper-format/
├── backend/                  # 后端服务
│   ├── app.py               # Flask 主应用
│   ├── requirements.txt     # Python 依赖
│   └── utils/               # 核心模块
│       ├── docx_processor.py    # 文档处理器
│       └── format_config.py     # 格式配置
│
├── frontend/                # 前端界面
│   └── public/
│       ├── index.html       # 主页面
│       ├── css/style.css    # 样式
│       └── js/app.js        # 脚本
│
├── README.md                # 文档（英文）
├── README_zh.md             # 文档（中文）
└── LICENSE                  # MIT 协议
```

---

## 🔌 API 文档

### 接口列表

| 接口 | 方法 | 描述 |
|:---|:---:|:---|
| `/api/upload` | POST | 上传文档 |
| `/api/check` | POST | 格式检查 |
| `/api/format` | POST | 一键排版 |
| `/api/download/<file_id>` | GET | 下载文档 |
| `/api/templates` | GET | 获取模板列表 |

---

## 🤝 参与贡献

欢迎所有形式的贡献！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 发起 Pull Request

---

## ❓ 常见问题

<details>
<summary><b>Q：支持哪些文档格式？</b></summary>

目前仅支持 .docx 格式（Office 2007+），不支持 .doc 格式。

</details>

<details>
<summary><b>Q：会修改我的论文内容吗？</b></summary>

不会！系统只修改格式（字体、行距、页边距等），不会改动任何文字内容。

</details>

<details>
<summary><b>Q：文件安全吗？</b></summary>

安全！文件仅临时存储，1小时后自动删除。我们不会保存或备份您的文件。

</details>

---

## 📜 更新日志

### v1.0.0 (2026-03-07)

- ✨ 首次发布
- ✨ 格式检查功能
- ✨ 一键排版功能
- ✨ 国标通用模板支持
- 📝 完整项目文档

---

## 📄 开源协议

本项目基于 **MIT 协议** 开源。

---

## 👤 关于作者

**试界 TryWorld**

[![GitHub](https://img.shields.io/badge/GitHub-1822520752-181717?style=for-the-badge&logo=github)](https://github.com/1822520752)

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给一个 Star！**

Made with ❤️ by 试界 TryWorld

**© 2026 论文格 - 让论文格式规范变简单**

</div>
