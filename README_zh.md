<div align="center">

<a href="README.md">
  <img src="https://img.shields.io/badge/Language-English-4F46E5?style=for-the-badge&labelColor=3730A3" alt="English">
</a>
<a href="README_zh.md">
  <img src="https://img.shields.io/badge/Language-中文-DC2626?style=for-the-badge&labelColor=B91C1C" alt="中文">
</a>

</div>

<br>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Noto+Sans+SC:wght@700&size=42&duration=3000&pause=1000&color=4F46E5&center=true&vCenter=true&repeat=false&width=600&lines=论文格" alt="论文格">

### ✨ 毕业论文格式一键排版工具

**让论文格式规范变简单 · 让毕业更轻松**

<br>

<p align="center">
  <a href="https://paperformat-zx1822520752.app.haisnap.com/">
    <img src="https://img.shields.io/badge/🚀_在线体验-立即使用-4F46E5?style=for-the-badge&logoColor=white&labelColor=3730A3" alt="在线体验">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.8+-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Flask-2.0+-000000?style=flat-square&logo=flask&logoColor=white" alt="Flask">
  <img src="https://img.shields.io/badge/License-MIT-059669?style=flat-square" alt="License">
</p>

<p align="center">
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

</div>

---

## 🎯 什么是论文格？

**论文格** 是一款专为高校毕业生设计的智能论文格式化工具。上传 Word 文档，自动检查格式问题，一键排版符合规范。

<table>
<tr>
<td width="33%" align="center">

### 📤 上传

拖拽上传 .docx 文件

</td>
<td width="33%" align="center">

### � 检查

自动检查 15+ 项格式

</td>
<td width="33%" align="center">

### ✨ 排版

一键自动排版

</td>
</tr>
</table>

---

## ✨ 功能特性

<table>
<tr>
<td width="50%">

### 🔍 智能格式检查

- 📄 **页面设置** - 页边距、纸张大小
- 🔤 **标题格式** - 字体、字号、对齐方式
- 📝 **正文格式** - 字体、行距、缩进
- 📋 **摘要格式** - 标题和正文
- 🖼️ **图表标题** - 图题、表题格式
- 📚 **参考文献** - 格式检查
- 📑 **页眉页脚** - 页码格式

</td>
<td width="50%">

### 🎨 一键智能排版

- 🎯 **自动识别** - 智能内容检测
- ⚡ **批量处理** - 一次性完成
- 🔧 **自定义配置** - 灵活设置
- 📥 **内容安全** - 不改变文字
- 💾 **即时下载** - 立即获取结果

</td>
</tr>
</table>

---

## 🚀 快速开始

### 安装

```bash
# 克隆项目
git clone https://github.com/1822520752/paper-format.git

# 安装依赖
cd paper-format/backend
pip install -r requirements.txt

# 启动服务
python app.py
```

### 使用

浏览器访问 **http://localhost:3000**

---

## ⚙️ 默认配置

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

---

## 📁 项目结构

```
paper-format/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── utils/
├── frontend/
│   └── public/
├── README.md
├── README_zh.md
└── LICENSE
```

---

## 🔌 API 接口

| 接口 | 方法 | 描述 |
|:---|:---:|:---|
| `/api/upload` | POST | 上传文档 |
| `/api/check` | POST | 格式检查 |
| `/api/format` | POST | 一键排版 |
| `/api/download/<id>` | GET | 下载结果 |
| `/api/templates` | GET | 获取模板 |

---

## ❓ 常见问题

<details>
<summary><b>支持哪些文档格式？</b></summary>
<br>
仅支持 <code>.docx</code> 格式（Office 2007 及以上版本）。
</details>

<details>
<summary><b>会修改我的论文内容吗？</b></summary>
<br>
不会！只修改格式，文字内容保持不变。
</details>

<details>
<summary><b>文件安全吗？</b></summary>
<br>
安全！文件在 1 小时后自动删除。
</details>

---

## 🤝 参与贡献

欢迎提交 Issue 和 Pull Request！

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

<img src="https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square" alt="Made with love">

**© 2026 论文格 · By 试界 TryWorld**

</div>
