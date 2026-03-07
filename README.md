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
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1E3A8A,50:3B82F6,100:8B5CF6&height=200&section=header&text=PaperFormat&fontSize=60&fontColor=FFFFFF&animation=fadeIn&fontAlignY=35&desc=One-Click%20Thesis%20Formatting%20Tool&descAlignY=55&descSize=18" width="100%">

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
    <img src="https://img.shields.io/badge/🚀_Live_Demo-4F46E5?style=for-the-badge&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/1822520752/paper-format/issues/new">
    <img src="https://img.shields.io/badge/🐛_Report_Bug-DC2626?style=for-the-badge&logoColor=white" alt="Report Bug">
  </a>
  <a href="https://github.com/1822520752/paper-format/issues/new">
    <img src="https://img.shields.io/badge/💡_Feature-059669?style=for-the-badge&logoColor=white" alt="Feature Request">
  </a>
</p>

</div>

---

## 🎯 What is PaperFormat?

> **PaperFormat** is a professional thesis formatting tool designed for university graduates. 

Upload your Word document → Check format issues → One-click formatting → Download the result

**Why choose PaperFormat?**

| Problem | Solution |
|:--------|:---------|
| 😫 Manually adjusting margins, fonts, line spacing... | ✅ **One-click** automatic formatting |
| 😫 Reference format errors, misplaced captions... | ✅ **15+ items** comprehensive check |
| 😫 Hours spent still not meeting requirements... | ✅ **National standard** compliant |

---

## ✨ Features

<table>
<tr>
<td width="50%" valign="top">

### 🔍 Format Checking

- 📄 **Page Settings** - Margins, paper size
- 🔤 **Headings** - Font, size, alignment
- 📝 **Body Text** - Font, spacing, indent
- 📋 **Abstract** - Chinese/English format
- 🖼️ **Captions** - Figure/Table titles
- 📚 **References** - Format compliance
- 📑 **Header/Footer** - Page numbers

</td>
<td width="50%" valign="top">

### 🎨 One-Click Formatting

- 🎯 **Auto Recognition** - Smart content detection
- ⚡ **Batch Processing** - All adjustments at once
- 🔧 **Custom Config** - Flexible parameters
- 📥 **Content Safe** - Original text preserved
- 💾 **Instant Download** - Ready immediately

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

```
Python 3.8+  |  pip  |  Windows/macOS/Linux
```

### Installation

```bash
# 1️⃣ Clone
git clone https://github.com/1822520752/paper-format.git

# 2️⃣ Install
cd paper-format/backend
pip install -r requirements.txt

# 3️⃣ Run
python app.py
```

### Access

Open **http://localhost:3000** in your browser 🎉

---

## 📋 Usage

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   📤 UPLOAD  ─────►  🔍 CHECK  ─────►  ✨ FORMAT  ─────►  📥 DOWNLOAD   │
│                                                                 │
│   .docx file        15+ items        One-click        Formatted doc  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

<details>
<summary><b>📖 Detailed Steps</b></summary>

1. **Upload** - Click or drag your .docx file (max 20MB)
2. **Check** - Click "Format Check" to see issues
3. **Format** - Click "One-Click Format" to fix
4. **Download** - Get your formatted document

> ⚠️ Only .docx format supported (Office 2007+)

</details>

---

## ⚙️ Default Configuration

> Based on **GB/T 7713.1-2006** National Standard

| Setting | Value | Setting | Value |
|:--------|:------|:--------|:------|
| Top Margin | 2.5 cm | Body Font | SimSun 12pt |
| Bottom Margin | 2.5 cm | Heading 1 | SimHei 16pt |
| Left Margin | 3.0 cm | Heading 2 | SimHei 14pt |
| Right Margin | 2.5 cm | Heading 3 | SimHei 12pt |
| Line Spacing | 1.5x | First Indent | 2 chars |

---

## 📁 Project Structure

```
paper-format/
├── 📂 backend/
│   ├── 📄 app.py              # Flask application
│   ├── 📄 requirements.txt    # Dependencies
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

## 🔌 API Reference

| Method | Endpoint | Description |
|:------:|:---------|:------------|
| `POST` | `/api/upload` | Upload document |
| `POST` | `/api/check` | Check format |
| `POST` | `/api/format` | Format document |
| `GET` | `/api/download/<id>` | Download result |
| `GET` | `/api/templates` | List templates |

---

## 🤝 Contributing

Contributions make the open source community amazing! 

```
1. 🍴 Fork → 2. 🌿 Create Branch → 3. 💻 Commit → 4. 📤 Push → 5. 🎉 Pull Request
```

---

## ❓ FAQ

<details>
<summary><b>What formats are supported?</b></summary>
<br>
Only <code>.docx</code> (Office 2007+). <code>.doc</code> is not supported.
</details>

<details>
<summary><b>Will my content be modified?</b></summary>
<br>
<strong>No!</strong> Only formatting (fonts, margins, spacing) is changed. Your text content remains untouched.
</details>

<details>
<summary><b>Is my file safe?</b></summary>
<br>
<strong>Yes!</strong> Files are processed temporarily and auto-deleted after 1 hour. We never store or backup your files.
</details>

---

## � Author

<div align="center">

**TryWorld**

[![GitHub](https://img.shields.io/badge/@1822520752-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/1822520752)

*Exploring infinite possibilities*

</div>

---

## ⭐ Star History

<div align="center">

**If this project helps you, please consider giving it a ⭐!**

[![Star History Chart](https://api.star-history.com/svg?repos=1822520752/paper-format&type=Date)](https://star-history.com/#1822520752/paper-format&Date)

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:8B5CF6,50:3B82F6,100:1E3A8A&height=120&section=footer" width="100%">

**Made with ❤️ by TryWorld**

**© 2026 PaperFormat - Making thesis formatting simple**

<p align="center"><a href="#readme-top">⬆️ Back to Top</a></p>

</div>
