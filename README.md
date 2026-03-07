<div align="center">

[English](README.md) · [中文](README_zh.md)

</div>

---

<div align="center">

<img src="https://img.shields.io/badge/PaperFormat-Thesis_Formatting_Tool-4A90D9?style=for-the-badge&logo=googledocs&logoColor=white" alt="PaperFormat">

# 📝 PaperFormat

### **One-Click Thesis Formatting Tool**

*Making thesis formatting simple · Making graduation easier*

[![Python Version](https://img.shields.io/badge/Python-3.8+-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/downloads/)
[![Flask](https://img.shields.io/badge/Flask-2.0+-000000?style=flat-square&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![License](https://img.shields.io/badge/License-MIT-success?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/1822520752/paper-format?style=flat-square&logo=github&color=yellow)](https://github.com/1822520752/paper-format/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/1822520752/paper-format?style=flat-square&logo=github)](https://github.com/1822520752/paper-format/issues)

**[🚀 Live Demo](https://paperformat-zx1822520752.app.haisnap.com/) · [📖 Documentation](#user-guide) · [🐛 Report Bug](https://github.com/1822520752/paper-format/issues) · [💡 Request Feature](https://github.com/1822520752/paper-format/issues)**

</div>

---

## 📖 Background

### Why This Tool?

Every graduation season, countless university graduates face the tedious task of thesis formatting:

> 😫 "Need to adjust margins, change fonts, set line spacing..."
> 
> 😫 "Reference format is wrong again, figure captions are misplaced..."
> 
> 😫 "After hours of editing, it still doesn't meet school requirements..."

**PaperFormat** was created to solve these pain points!

### Our Goals

- ✅ **Free Your Hands** - Say goodbye to tedious manual formatting
- ✅ **Improve Efficiency** - Complete format checking and formatting with one click
- ✅ **Standardization** - Strictly follow the national standard GB/T 7713.1-2006
- ✅ **Easy to Use** - No installation required, use directly in your browser

---

## ✨ Core Features

### 🔍 Smart Format Checking

| Check Item | Content | Precision |
|:---:|:---|:---:|
| 📄 **Page Settings** | Top/bottom/left/right margins, paper size | 0.1cm |
| 🔤 **Heading Format** | Level 1/2/3 heading font, size, bold, alignment | Exact |
| 📝 **Body Format** | Body font, size, line spacing, first line indent | Exact |
| 📋 **Abstract Format** | Chinese/English abstract title and body format | Exact |
| 🖼️ **Figure/Table Captions** | Caption font, size, position | Exact |
| 📚 **References** | Reference title and body format | Exact |
| 📑 **Header/Footer** | Header content, page number format | Exact |

### 🎨 One-Click Smart Formatting

| Feature | Description |
|:---:|:---|
| 🎯 **Auto Recognition** | Intelligently identify headings, body, abstract and other content |
| ⚡ **Batch Processing** | Complete all format adjustments at once |
| 🔧 **Custom Configuration** | Support custom format parameters |
| 📥 **Content Preservation** | Formatting process does not change original content |
| 💾 **Instant Download** | Download immediately after formatting |

### 📋 Preset Templates

| Template Name | Applicable Scenarios | Margins | Line Spacing | Body Font |
|:---:|:---|:---:|:---:|:---:|
| 🎓 **National Standard** | Most universities | 2.5/2.5/3.0/2.5 | 1.5x | SimSun |

---

## 🎮 Demo

### Workflow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   📤 Upload │ ─► │   🔍 Check  │ ─► │   ✨ Format │ ─► │   📥 Download│
│   Word Doc  │    │   Issues    │    │   One-Click │    │   Result    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

---

## 🚀 Quick Start

### Requirements

| Environment | Version | Notes |
|:---:|:---:|:---|
| Python | 3.8+ | 3.10 or 3.11 recommended |
| pip | Latest | Python package manager |
| OS | Windows/macOS/Linux | Cross-platform support |

### Installation

```bash
# Clone the project
git clone https://github.com/1822520752/paper-format.git

# Navigate to backend directory
cd paper-format/backend

# Install dependencies
pip install -r requirements.txt

# Start the server
python app.py
```

### Access the Application

Open your browser and visit: **http://localhost:3000**

---

## 📋 User Guide

### Step 1: Upload Document

1. Click the upload area or drag and drop your .docx file
2. Wait for upload to complete

> ⚠️ **Note**: Only .docx format is supported, .doc format is not supported

### Step 2: Check Format

1. Click the "Format Check" button
2. Review the check report to understand format issues

### Step 3: One-Click Formatting

1. Click the "One-Click Format" button
2. Wait for formatting to complete

### Step 4: Download Document

1. Click the "Download" button
2. Get the formatted document

---

## ⚙️ Configuration

### Default Configuration (National Standard)

| Setting | Default Value |
|:---|:---:|
| Top Margin | 2.5 cm |
| Bottom Margin | 2.5 cm |
| Left Margin | 3.0 cm |
| Right Margin | 2.5 cm |
| Body Font | SimSun 12pt |
| Heading 1 | SimHei 16pt Center Bold |
| Heading 2 | SimHei 14pt Left Bold |
| Heading 3 | SimHei 12pt Left Bold |
| Line Spacing | 1.5x |
| First Line Indent | 2 characters |

---

## 📁 Project Structure

```
paper-format/
├── backend/                  # Backend service
│   ├── app.py               # Flask main application
│   ├── requirements.txt     # Python dependencies
│   └── utils/               # Core modules
│       ├── docx_processor.py    # Document processor
│       └── format_config.py     # Format configuration
│
├── frontend/                # Frontend interface
│   └── public/
│       ├── index.html       # Main page
│       ├── css/style.css    # Styles
│       └── js/app.js        # Scripts
│
├── README.md                # Documentation (English)
├── README_zh.md             # Documentation (Chinese)
└── LICENSE                  # MIT License
```

---

## 🔌 API Documentation

### Endpoints

| Endpoint | Method | Description |
|:---|:---:|:---|
| `/api/upload` | POST | Upload document |
| `/api/check` | POST | Format check |
| `/api/format` | POST | One-click formatting |
| `/api/download/<file_id>` | GET | Download document |
| `/api/templates` | GET | Get template list |

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ❓ FAQ

<details>
<summary><b>Q: What document formats are supported?</b></summary>

Only .docx format (Office 2007+) is supported. .doc format is not supported.

</details>

<details>
<summary><b>Q: Will my content be modified?</b></summary>

No! The system only modifies formatting (fonts, line spacing, margins, etc.) and does not change any text content.

</details>

<details>
<summary><b>Q: Is my file safe?</b></summary>

Yes! Files are processed temporarily and automatically deleted after 1 hour. We do not store or backup your files.

</details>

---

## 📜 Changelog

### v1.0.0 (2026-03-07)

- ✨ Initial release
- ✨ Format checking feature
- ✨ One-click formatting feature
- ✨ National standard template support
- 📝 Complete documentation

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**TryWorld**

[![GitHub](https://img.shields.io/badge/GitHub-1822520752-181717?style=for-the-badge&logo=github)](https://github.com/1822520752)

---

<div align="center">

**⭐ If this project helps you, please give it a Star!**

Made with ❤️ by TryWorld

**© 2026 PaperFormat - Making thesis formatting simple**

</div>
