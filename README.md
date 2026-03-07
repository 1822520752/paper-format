<a name="readme-top"></a>

<div align="center">

<!-- Language Switcher -->
<img src="https://img.shields.io/badge/English-4F46E5?style=for-the-badge" alt="English">
<img src="https://img.shields.io/badge/中文-EF4444?style=for-the-badge" alt="中文">

<br><br>

<!-- Logo & Title -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://via.placeholder.com/120x120/4F46E5/FFFFFF?text=PF">
  <img src="https://via.placeholder.com/120x120/4F46E5/FFFFFF?text=PF" alt="Logo" width="120" height="120" style="border-radius: 24px; box-shadow: 0 8px 32px rgba(79,70,229,0.3);">
</picture>

<h1 style="font-size: 3.5rem; font-weight: 800; margin: 16px 0 8px; background: linear-gradient(135deg, #4F46E5, #7C3AED, #9333EA); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
  PaperFormat
</h1>

<h3 style="font-size: 1.5rem; font-weight: 600; color: #64748B; margin: 0 0 8px;">
  One-Click Thesis Formatting Tool
</h3>

<p style="font-size: 1.1rem; color: #94A3B8; margin: 0 0 24px;">
  ✨ Making thesis formatting simple · Making graduation easier ✨
</p>

<!-- Badges Row 1 -->
<p>
  <a href="https://www.python.org/downloads/">
    <img src="https://img.shields.io/badge/Python-3.8+-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python">
  </a>
  <a href="https://flask.palletsprojects.com/">
    <img src="https://img.shields.io/badge/Flask-2.0+-000000?style=flat-square&logo=flask&logoColor=white" alt="Flask">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-10B981?style=flat-square" alt="License">
  </a>
  <a href="https://github.com/1822520752/paper-format/stargazers">
    <img src="https://img.shields.io/github/stars/1822520752/paper-format?style=flat-square&logo=github&color=FBBF24" alt="Stars">
  </a>
  <a href="https://github.com/1822520752/paper-format/network/members">
    <img src="https://img.shields.io/github/forks/1822520752/paper-format?style=flat-square&logo=github" alt="Forks">
  </a>
</p>

<!-- CTA Buttons -->
<p>
  <a href="https://paperformat-zx1822520752.app.haisnap.com/">
    <img src="https://img.shields.io/badge/🚀_Live_Demo-4F46E5?style=for-the-badge" alt="Live Demo">
  </a>
  <a href="https://github.com/1822520752/paper-format/issues/new">
    <img src="https://img.shields.io/badge/🐛_Report_Bug-EF4444?style=for-the-badge" alt="Report Bug">
  </a>
  <a href="https://github.com/1822520752/paper-format/issues/new">
    <img src="https://img.shields.io/badge/💡_Feature-10B981?style=for-the-badge" alt="Feature Request">
  </a>
</p>

<!-- Demo Image -->
<img src="https://via.placeholder.com/900x500/EEF2FF/4F46E5?text=🎨+PaperFormat+Preview" width="90%" style="border-radius: 16px; box-shadow: 0 12px 40px rgba(79,70,229,0.15); margin: 24px 0;">

</div>

---

## 📌 About

<table>
<tr>
<td width="60%">

**PaperFormat** is a professional thesis formatting tool designed for university graduates.

**Why PaperFormat?**
- 🎯 **One-Click Solution** - Check and format your thesis in seconds
- 📐 **National Standard** - Follows GB/T 7713.1-2006 specifications
- 🔒 **Privacy First** - Files auto-deleted after processing
- 🆓 **100% Free** - No registration, no limits

</td>
<td width="40%" align="center">

**Quick Stats**

| Metric | Value |
|:------:|:-----:|
| Format Checks | 15+ |
| Templates | 1 |
| Price | Free |
| Uptime | 99.9% |

</td>
</tr>
</table>

---

## ✨ Features

<table>
<tr>
<th width="50%">🔍 Smart Format Checking</th>
<th width="50%">🎨 One-Click Formatting</th>
</tr>
<tr>
<td>

✓ Page margins & paper size  
✓ Heading styles (H1/H2/H3)  
✓ Body font & line spacing  
✓ Abstract formatting  
✓ Figure/Table captions  
✓ References format  
✓ Header & footer

</td>
<td>

✓ Auto content recognition  
✓ Batch processing  
✓ Custom configuration  
✓ Content preservation  
✓ Instant download  
✓ Multiple templates  
✓ Preview before apply

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

| Requirement | Version |
|:------------|:-------:|
| Python | 3.8+ |
| pip | Latest |
| OS | Any |

### Installation

```bash
# Clone
git clone https://github.com/1822520752/paper-format.git

# Install
cd paper-format/backend
pip install -r requirements.txt

# Run
python app.py
```

### Usage

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  📤 Upload  │ ─► │  🔍 Check   │ ─► │  ✨ Format  │ ─► │  📥 Download│
│  Word Doc   │    │  Issues     │    │  One-Click  │    │  Result     │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
```

---

## ⚙️ Default Configuration

> Based on GB/T 7713.1-2006 National Standard

| Setting | Value | Setting | Value |
|:--------|:-----:|:--------|:-----:|
| Top Margin | 2.5 cm | Bottom Margin | 2.5 cm |
| Left Margin | 3.0 cm | Right Margin | 2.5 cm |
| Body Font | SimSun 12pt | Heading 1 | SimHei 16pt |
| Line Spacing | 1.5x | First Indent | 2 chars |

---

## 📁 Project Structure

```
paper-format/
├── 📂 backend/
│   ├── 📄 app.py
│   ├── 📄 requirements.txt
│   └── 📂 utils/
│       ├── 📄 docx_processor.py
│       └── 📄 format_config.py
├── 📂 frontend/
│   └── 📂 public/
│       ├── 📄 index.html
│       ├── 📂 css/
│       └── 📂 js/
├── 📄 README.md
└── 📄 LICENSE
```

---

## 🔌 API Reference

| Method | Endpoint | Description |
|:------:|:---------|:------------|
| `POST` | `/api/upload` | Upload document |
| `POST` | `/api/check` | Check formatting |
| `POST` | `/api/format` | Apply formatting |
| `GET` | `/api/download/<id>` | Download result |
| `GET` | `/api/templates` | List templates |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ❓ FAQ

<details>
<summary><b>What file formats are supported?</b></summary>
<br>
Only <code>.docx</code> format (Word 2007+) is supported. The older <code>.doc</code> format is not supported.
</details>

<details>
<summary><b>Will my thesis content be modified?</b></summary>
<br>
<strong>No!</strong> The system only adjusts formatting (fonts, margins, spacing). Your text content remains completely unchanged.
</details>

<details>
<summary><b>Is my file safe and private?</b></summary>
<br>
<strong>Yes!</strong> All files are processed temporarily and automatically deleted within 1 hour. We never store or backup your documents.
</details>

<details>
<summary><b>Can I customize the formatting rules?</b></summary>
<br>
<strong>Yes!</strong> Use the "Advanced Settings" panel to customize margins, fonts, and other parameters, or import a configuration file.
</details>

---

## 📜 Changelog

### `v1.0.0` - 2026-03-07

- ✨ Initial release
- ✨ Format checking (15+ items)
- ✨ One-click formatting
- ✨ National standard template
- 📝 Complete documentation

---

## 👤 Author

<div align="center">

**TryWorld**

[![GitHub](https://img.shields.io/badge/GitHub-1822520752-181717?style=for-the-badge&logo=github)](https://github.com/1822520752)

*Exploring Infinite Possibilities*

</div>

---

## ⭐ Star History

<div align="center">

**If this project helps you, please consider giving it a star! ⭐**

[![Star History Chart](https://api.star-history.com/svg?repos=1822520752/paper-format&type=Date)](https://star-history.com/#1822520752/paper-format&Date)

</div>

---

<div align="center">

<img src="https://img.shields.io/badge/Made%20with-❤️-red?style=flat-square" alt="Made with love">

**© 2026 PaperFormat - Making thesis formatting simple**

**[⬆ Back to Top](#readme-top)**

</div>
