<div align="center">

<!-- Language Switcher -->
<p>
  <a href="README.md">
    <img src="https://img.shields.io/badge/EN-English-6366F1?style=flat-square&labelColor=4F46E5" alt="English">
  </a>
  <a href="README_zh.md">
    <img src="https://img.shields.io/badge/ZH-中文-EF4444?style=flat-square&labelColor=DC2626" alt="中文">
  </a>
</p>

<!-- Hero Section -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=6366F1&height=180&section=header&text=PaperFormat&fontSize=45&fontColor=FFFFFF&animation=fadeIn&fontAlignY=35&desc=One-Click%20Thesis%20Formatting%20Tool&descAlignY=55&descSize=18" alt="PaperFormat">

<!-- Stats Badges -->
<p>
  <img src="https://img.shields.io/github/stars/1822520752/paper-format?style=for-the-badge&logo=github&logoColor=white&labelColor=4F46E5&color=6366F1" alt="Stars">
  <img src="https://img.shields.io/github/forks/1822520752/paper-format?style=for-the-badge&logo=github&logoColor=white&labelColor=4F46E5&color=6366F1" alt="Forks">
  <img src="https://img.shields.io/github/issues/1822520752/paper-format?style=for-the-badge&logo=github&logoColor=white&labelColor=4F46E5&color=6366F1" alt="Issues">
</p>

<!-- Tech Stack -->
<p>
  <img src="https://img.shields.io/badge/Python-3.8+-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Flask-2.0+-000000?style=flat-square&logo=flask&logoColor=white" alt="Flask">
  <img src="https://img.shields.io/badge/License-MIT-059669?style=flat-square" alt="License">
</p>

<!-- CTA Button -->
<p>
  <a href="https://paperformat-zx1822520752.app.haisnap.com/">
    <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-Try_Now!-6366F1?style=for-the-badge&labelColor=4F46E5" alt="Live Demo">
  </a>
</p>

</div>

---

## 📖 About

> **PaperFormat** is a smart thesis formatting tool for university graduates.

Upload your Word document → Check format issues → One-click formatting → Download

---

## ✨ Features

<table>
<tr>
<td valign="top" width="50%">

### 🔍 Format Checking

- 📄 Page margins & paper size
- 🔤 Heading styles (H1/H2/H3)
- 📝 Body text formatting
- 📋 Abstract format
- 🖼️ Figure & table captions
- 📚 References format
- 📑 Header & footer

</td>
<td valign="top" width="50%">

### 🎨 One-Click Formatting

- 🎯 Smart content recognition
- ⚡ Batch processing
- 🔧 Custom configuration
- 📥 Content preservation
- 💾 Instant download

</td>
</tr>
</table>

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/1822520752/paper-format.git

# Install
cd paper-format/backend
pip install -r requirements.txt

# Run
python app.py
```

Visit **http://localhost:3000** to use.

---

## ⚙️ Configuration

| Setting | Value |
|:---|:---:|
| Top Margin | 2.5 cm |
| Bottom Margin | 2.5 cm |
| Left Margin | 3.0 cm |
| Right Margin | 2.5 cm |
| Body Font | SimSun 12pt |
| Heading 1 | SimHei 16pt Bold |
| Heading 2 | SimHei 14pt Bold |
| Heading 3 | SimHei 12pt Bold |
| Line Spacing | 1.5x |

---

##  API

| Endpoint | Method | Description |
|:---|:---:|:---|
| `/api/upload` | `POST` | Upload document |
| `/api/check` | `POST` | Format check |
| `/api/format` | `POST` | One-click format |
| `/api/download/<id>` | `GET` | Download result |
| `/api/templates` | `GET` | Get templates |

---

## ❓ FAQ

<details>
<summary><b>What formats are supported?</b></summary>

Only `.docx` (Office 2007+) is supported.

</details>

<details>
<summary><b>Will my content be changed?</b></summary>

No! Only formatting is modified, text remains unchanged.

</details>

<details>
<summary><b>Is my file safe?</b></summary>

Yes! Files are auto-deleted after 1 hour.

</details>

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

## 👤 Author

<p align="center">
  <a href="https://github.com/1822520752">
    <img src="https://img.shields.io/badge/GitHub-@1822520752-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>

---

## ⭐ Star History

<p align="center">
  <a href="https://star-history.com/#1822520752/paper-format&Date">
    <img src="https://api.star-history.com/svg?repos=1822520752/paper-format&type=Date" alt="Star History" width="600">
  </a>
</p>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=6366F1&height=100&section=footer" alt="Footer">

**Made with ❤️ by TryWorld**

**© 2026 PaperFormat**

</div>
