<div align="center">

<!-- Language Switcher -->
<p>
  <a href="README.md">
    <img src="https://img.shields.io/badge/English-4F46E5?style=for-the-badge&logo=googletranslate&logoColor=white" alt="English">
  </a>
  <a href="README_zh.md">
    <img src="https://img.shields.io/badge/中文-DC2626?style=for-the-badge&logo=googletranslate&logoColor=white" alt="中文">
  </a>
</p>

<!-- Animated Title -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=4F46E5&height=120&section=header&text=论文格&fontSize=45&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=毕业论文格式一键排版工具&descAlignY=55&descSize=16" alt="论文格">

<!-- Shields -->
<p>
  <img src="https://img.shields.io/badge/Python-3.8+-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Flask-2.0+-000000?style=flat-square&logo=flask&logoColor=white" alt="Flask">
  <img src="https://img.shields.io/badge/License-MIT-059669?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/PRs-Welcome-4F46E5?style=flat-square" alt="PRs Welcome">
</p>

<p>
  <a href="https://github.com/1822520752/paper-format/stargazers">
    <img src="https://img.shields.io/github/stars/1822520752/paper-format?style=flat-square&logo=github&color=yellow" alt="Stars">
  </a>
  <a href="https://github.com/1822520752/paper-format/network/members">
    <img src="https://img.shields.io/github/forks/1822520752/paper-format?style=flat-square&logo=github" alt="Forks">
  </a>
  <a href="https://github.com/1822520752/paper-format/issues">
    <img src="https://img.shields.io/github/issues/1822520752/paper-format?style=flat-square&logo=github" alt="Issues">
  </a>
</p>

<!-- CTA Button -->
<p>
  <a href="https://paperformat-zx1822520752.app.haisnap.com/">
    <img src="https://img.shields.io/badge/🚀_在线体验-立即使用!-4F46E5?style=for-the-badge&logoColor=white" alt="在线体验">
  </a>
</p>

</div>

---

## 📖 简介

> **论文格** 是一款专为高校毕业生设计的智能论文格式化工具。
> 上传文档 → 检查格式 → 一键排版 → 下载成品

<table>
<tr>
<td align="center" width="33%">

### 📤 上传

**拖拽上传**

支持 .docx 格式

</td>
<td align="center" width="33%">

### 🔍 检查

**15+ 项**

自动格式检测

</td>
<td align="center" width="33%">

### ✨ 排版

**一键完成**

即时下载

</td>
</tr>
</table>

---

## ✨ 功能特性

<table>
<tr>
<td width="50%" valign="top">

### 🔍 智能格式检查

| 项目 | 描述 |
|:---:|:---|
| 📄 | 页边距、纸张大小 |
| 🔤 | 标题样式 |
| 📝 | 正文格式 |
| 📋 | 摘要格式 |
| 🖼️ | 图表标题 |
| 📚 | 参考文献 |
| 📑 | 页眉页脚 |

</td>
<td width="50%" valign="top">

### 🎨 一键智能排版

| 功能 | 优势 |
|:---:|:---|
| 🎯 | 自动内容识别 |
| ⚡ | 批量处理 |
| 🔧 | 自定义设置 |
| 📥 | 内容不变 |
| 💾 | 即时下载 |

</td>
</tr>
</table>

---

## 🚀 快速开始

### 📦 安装

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

### 🎮 使用

浏览器访问 **http://localhost:3000**

---

## ⚙️ 配置

<details>
<summary><b>📋 默认配置（国标通用）</b></summary>

| 设置项 | 默认值 |
|:---|:---:|
| 上页边距 | 2.5 cm |
| 下页边距 | 2.5 cm |
| 左页边距 | 3.0 cm |
| 右页边距 | 2.5 cm |
| 正文字体 | 宋体 12pt |
| 一级标题 | 黑体 16pt 加粗居中 |
| 二级标题 | 黑体 14pt 加粗左对齐 |
| 三级标题 | 黑体 12pt 加粗左对齐 |
| 行距 | 1.5 倍 |
| 首行缩进 | 2 字符 |

</details>

---

## 🔌 API 接口

| 方法 | 接口 | 描述 |
|:---:|:---|:---|
| `POST` | `/api/upload` | 上传文档 |
| `POST` | `/api/check` | 格式检查 |
| `POST` | `/api/format` | 一键排版 |
| `GET` | `/api/download/<id>` | 下载结果 |
| `GET` | `/api/templates` | 模板列表 |

---

## ❓ 常见问题

<details>
<summary><b>支持哪些文件格式？</b></summary>

仅支持 `.docx` 格式（Microsoft Word 2007 及以上版本）。不支持旧版 `.doc` 格式。

</details>

<details>
<summary><b>会修改我的论文内容吗？</b></summary>

**不会！** 系统只修改格式（字体、页边距、行距等），文字内容完全不变。

</details>

<details>
<summary><b>文件安全吗？</b></summary>

**安全！** 文件仅临时处理，1小时后自动删除。我们绝不保存或备份您的文档。

</details>

---

## 🤝 参与贡献

欢迎参与！您可以：

- 🐛 [报告问题](https://github.com/1822520752/paper-format/issues)
- 💡 [功能建议](https://github.com/1822520752/paper-format/issues)
- 🔧 提交 Pull Request

---

## 👤 关于作者

<p align="center">
  <a href="https://github.com/1822520752">
    <img src="https://img.shields.io/badge/GitHub-@1822520752-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>

---

<div align="center">

## ⭐ Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=1822520752/paper-format&type=Date)](https://star-history.com/#1822520752/paper-format&Date)

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=4F46E5&height=80&section=footer" alt="Footer">

**Made with ❤️ by 试界 TryWorld**

**© 2026 论文格**

</div>
