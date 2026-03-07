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
<img src="https://capsule-render.vercel.app/api?type=waving&color=6366F1&height=180&section=header&text=论文格&fontSize=45&fontColor=FFFFFF&animation=fadeIn&fontAlignY=35&desc=毕业论文格式一键排版工具&descAlignY=55&descSize=18" alt="论文格">

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
    <img src="https://img.shields.io/badge/🚀_在线体验-立即使用!-6366F1?style=for-the-badge&labelColor=4F46E5" alt="在线体验">
  </a>
</p>

</div>

---

## 📖 关于

> **论文格** 是一款专为高校毕业生设计的智能论文格式化工具。

上传 Word 文档 → 检查格式问题 → 一键排版 → 下载

---

## ✨ 功能特性

<table>
<tr>
<td valign="top" width="50%">

### 🔍 格式检查

- 📄 页边距与纸张大小
- 🔤 标题样式（一级/二级/三级）
- 📝 正文格式
- 📋 摘要格式
- 🖼️ 图表标题
- 📚 参考文献格式
- 📑 页眉页脚

</td>
<td valign="top" width="50%">

### 🎨 一键排版

- 🎯 智能内容识别
- ⚡ 批量处理
- 🔧 自定义配置
- 📥 内容保护
- 💾 即时下载

</td>
</tr>
</table>

---

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/1822520752/paper-format.git

# 安装依赖
cd paper-format/backend
pip install -r requirements.txt

# 启动服务
python app.py
```

浏览器访问 **http://localhost:3000** 即可使用。

---

## ⚙️ 默认配置

| 设置项 | 默认值 |
|:---|:---:|
| 上页边距 | 2.5 cm |
| 下页边距 | 2.5 cm |
| 左页边距 | 3.0 cm |
| 右页边距 | 2.5 cm |
| 正文字体 | 宋体 12pt |
| 一级标题 | 黑体 16pt 加粗 |
| 二级标题 | 黑体 14pt 加粗 |
| 三级标题 | 黑体 12pt 加粗 |
| 行距 | 1.5 倍 |

---

## 🔌 API 接口

| 接口 | 方法 | 描述 |
|:---|:---:|:---|
| `/api/upload` | `POST` | 上传文档 |
| `/api/check` | `POST` | 格式检查 |
| `/api/format` | `POST` | 一键排版 |
| `/api/download/<id>` | `GET` | 下载结果 |
| `/api/templates` | `GET` | 获取模板 |

---

## ❓ 常见问题

<details>
<summary><b>支持哪些文档格式？</b></summary>

仅支持 `.docx` 格式（Office 2007 及以上版本）。

</details>

<details>
<summary><b>会修改我的论文内容吗？</b></summary>

不会！只修改格式，文字内容保持不变。

</details>

<details>
<summary><b>文件安全吗？</b></summary>

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

## ⭐ Star 历史

<p align="center">
  <a href="https://star-history.com/#1822520752/paper-format&Date">
    <img src="https://api.star-history.com/svg?repos=1822520752/paper-format&type=Date" alt="Star History" width="600">
  </a>
</p>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=6366F1&height=100&section=footer" alt="Footer">

**Made with ❤️ by 试界 TryWorld**

**© 2026 论文格**

</div>
