<a name="readme-top"></a>

<div align="center">

<!-- Language Switcher -->
<p>
  <a href="README.md">
    <img src="https://img.shields.io/badge/EN-English-3B82F6?style=flat-square&labelColor=1E40AF" alt="English">
  </a>
  <a href="README_zh.md">
    <img src="https://img.shields.io/badge/CN-中文-EF4444?style=flat-square&labelColor=991B1B" alt="中文">
  </a>
</p>

<!-- Hero Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1E3A8A,50:3B82F6,100:8B5CF6&height=200&section=header&text=论文格&fontSize=60&fontColor=FFFFFF&animation=fadeIn&fontAlignY=35&desc=毕业论文格式一键排版工具&descAlignY=55&descSize=18" width="100%">

<!-- Badges Row 1 -->
<p>
  <img src="https://img.shields.io/badge/Python-3.8+-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Flask-2.0+-000000?style=flat-square&logo=flask&logoColor=white" alt="Flask">
  <img src="https://img.shields.io/badge/License-MIT-059669?style=flat-square" alt="License">
</p>

<!-- Badges Row 2 - GitHub Stats -->
<p>
  <img src="https://img.shields.io/github/stars/1822520752/paper-format?style=flat-square&logo=github&color=FFD700&label=Stars" alt="Stars">
  <img src="https://img.shields.io/github/forks/1822520752/paper-format?style=flat-square&logo=github&color=4ADE80&label=Forks" alt="Forks">
  <img src="https://img.shields.io/github/issues/1822520752/paper-format?style=flat-square&logo=github&color=F87171&label=Issues" alt="Issues">
</p>

<!-- Action Buttons -->
<p>
  <a href="https://paperformat-zx1822520752.app.haisnap.com/">
    <img src="https://img.shields.io/badge/🚀_在线体验-4F46E5?style=for-the-badge&logoColor=white" alt="在线体验">
  </a>
  <a href="https://github.com/1822520752/paper-format/issues/new">
    <img src="https://img.shields.io/badge/🐛_反馈问题-DC2626?style=for-the-badge&logoColor=white" alt="反馈问题">
  </a>
  <a href="https://github.com/1822520752/paper-format/issues/new">
    <img src="https://img.shields.io/badge/💡_功能建议-059669?style=for-the-badge&logoColor=white" alt="功能建议">
  </a>
</p>

</div>

---

## 🎯 什么是论文格？

> **论文格** 是专为高校毕业生设计的专业论文格式化工具。

上传 Word 文档 → 检查格式问题 → 一键排版 → 下载结果

**为什么选择论文格？**

| 痛点 | 解决方案 |
|:-----|:---------|
| 😫 手动调整页边距、字体、行距…… | ✅ **一键** 自动排版 |
| 😫 参考文献格式错误、标题位置不对…… | ✅ **15+ 项** 全面检查 |
| 😫 改了半天还是不符合要求…… | ✅ **符合国标** 规范 |

---

## ✨ 功能特性

<table>
<tr>
<td width="50%" valign="top">

### 🔍 格式检查

- 📄 **页面设置** - 页边距、纸张大小
- 🔤 **标题格式** - 字体、字号、对齐
- 📝 **正文格式** - 字体、行距、缩进
- 📋 **摘要格式** - 中英文格式
- 🖼️ **图表标题** - 图题、表题
- 📚 **参考文献** - 格式规范
- 📑 **页眉页脚** - 页码格式

</td>
<td width="50%" valign="top">

### 🎨 一键排版

- 🎯 **智能识别** - 自动识别内容类型
- ⚡ **批量处理** - 一次性完成调整
- 🔧 **自定义配置** - 灵活参数设置
- 📥 **内容安全** - 原文内容不变
- 💾 **即时下载** - 立即获取结果

</td>
</tr>
</table>

---

## 🚀 快速开始

### 环境要求

```
Python 3.8+  |  pip  |  Windows/macOS/Linux
```

### 安装步骤

```bash
# 1️⃣ 克隆
git clone https://github.com/1822520752/paper-format.git

# 2️⃣ 安装
cd paper-format/backend
pip install -r requirements.txt

# 3️⃣ 运行
python app.py
```

### 访问

浏览器打开 **http://localhost:3000** 🎉

---

## 📋 使用方法

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   📤 上传  ─────►  🔍 检查  ─────►  ✨ 排版  ─────►  📥 下载    │
│                                                                 │
│   .docx 文件       15+ 项检查      一键修正        规范文档      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

<details>
<summary><b>📖 详细步骤</b></summary>

1. **上传** - 点击或拖拽 .docx 文件（最大 20MB）
2. **检查** - 点击「格式检查」查看问题
3. **排版** - 点击「一键排版」修正格式
4. **下载** - 获取排版后的文档

> ⚠️ 仅支持 .docx 格式（Office 2007+）

</details>

---

## ⚙️ 默认配置

> 基于 **GB/T 7713.1-2006** 国标规范

| 设置项 | 默认值 | 设置项 | 默认值 |
|:-------|:-------|:-------|:-------|
| 上页边距 | 2.5 cm | 正文字体 | 宋体 12pt |
| 下页边距 | 2.5 cm | 一级标题 | 黑体 16pt |
| 左页边距 | 3.0 cm | 二级标题 | 黑体 14pt |
| 右页边距 | 2.5 cm | 三级标题 | 黑体 12pt |
| 行距 | 1.5 倍 | 首行缩进 | 2 字符 |

---

## 📁 项目结构

```
paper-format/
├── 📂 backend/
│   ├── 📄 app.py              # Flask 应用
│   ├── 📄 requirements.txt    # 依赖列表
│   └── 📂 utils/
│       ├── 📄 docx_processor.py
│       └── 📄 format_config.py
│
├── 📂 frontend/
│   └── 📂 public/
│       ├── 📄 index.html
│       ├── 📂 css/
│       └── 📂 js/
│
├── 📄 README.md
├── 📄 README_zh.md
└── 📄 LICENSE
```

---

## 🔌 API 接口

| 方法 | 接口 | 描述 |
|:----:|:-----|:-----|
| `POST` | `/api/upload` | 上传文档 |
| `POST` | `/api/check` | 格式检查 |
| `POST` | `/api/format` | 一键排版 |
| `GET` | `/api/download/<id>` | 下载结果 |
| `GET` | `/api/templates` | 模板列表 |

---

## 🤝 参与贡献

贡献让开源社区更美好！

```
1. 🍴 Fork → 2. 🌿 创建分支 → 3. 💻 提交 → 4. 📤 推送 → 5. 🎉 Pull Request
```

---

## ❓ 常见问题

<details>
<summary><b>支持哪些文档格式？</b></summary>
<br>
仅支持 <code>.docx</code>（Office 2007+）。不支持 <code>.doc</code> 格式。
</details>

<details>
<summary><b>会修改我的论文内容吗？</b></summary>
<br>
<strong>不会！</strong> 只修改格式（字体、页边距、行距等），原文内容完全不变。
</details>

<details>
<summary><b>文件安全吗？</b></summary>
<br>
<strong>安全！</strong> 文件仅临时处理，1小时后自动删除。我们不会保存或备份您的文件。
</details>

---

##  关于作者

<div align="center">

**试界 TryWorld**

[![GitHub](https://img.shields.io/badge/@1822520752-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/1822520752)

*探索无限可能*

</div>

---

## ⭐ Star 历史

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐！**

[![Star History Chart](https://api.star-history.com/svg?repos=1822520752/paper-format&type=Date)](https://star-history.com/#1822520752/paper-format&Date)

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:8B5CF6,50:3B82F6,100:1E3A8A&height=120&section=footer" width="100%">

**Made with ❤️ by 试界 TryWorld**

**© 2026 论文格 - 让论文格式规范变简单**

<p align="center"><a href="#readme-top">⬆️ 返回顶部</a></p>

</div>
