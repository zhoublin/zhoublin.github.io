# 我的小宇宙

一个部署在 GitHub Pages 上的静态个人网站，支持：

- 文艺风格 UI（中文为主，英文为辅）
- 使用 Markdown 写博客
- 代码高亮（highlight.js）
- 图片、视频、表格
- LaTeX 公式（MathJax）

目录结构：

- `index.html`：首页
- `blog/index.html`：博客列表
- `blog/post.html`：文章阅读页
- `gallery/index.html`：相册
- `posts/`：Markdown 文章
- `assets/css/style.css`：样式
- `assets/js/*.js`：脚本
- `assets/images/`：图片
- `assets/videos/`：视频

## 写一篇新文章

1. 在 `posts/` 目录中新建一个 Markdown 文件，例如：`2025-hello-markdown.md`。

   ```markdown
   ---
   title: 我的第二篇文章
   date: 2025-11-24
   tags: [日常, demo]
   ---

   正文从这里开始，可以写 Markdown：

   - 支持代码块、图片、视频、表格、公式等
   ```

2. 打开 `assets/js/posts-config.js`，在 `window.POSTS_INDEX` 数组里追加一条配置：

   ```js
   {
     slug: '2025-hello-markdown',
     title: '我的第二篇文章',
     date: '2025-11-24',
     tags: ['日常', 'demo'],
     excerpt: '一句简短的摘要，用来显示在列表和首页。'
   }
   ```

   `slug` 必须和文件名（去掉 `.md`）一致。

3. （可选）同步到 `posts/index.json` 中，方便后续扩展或其他工具使用。

4. 提交并推送到 GitHub 后，GitHub Pages 上的博客列表、首页最近文章就会更新。

## 本地预览

本项目是纯静态文件，但因为浏览器的安全策略，直接用 `file://` 打开时有可能阻止 `fetch` 加载 Markdown 文件。

推荐的本地预览方式（任选一个）：

1. 使用 Python 简单 HTTP 服务：

   ```bash
   cd literary-blog-site
   python3 -m http.server 8000
   ```

   然后在浏览器打开 <http://localhost:8000>。

2. 使用 VS Code 的 Live Server 插件或任意静态服务器工具。

## 部署到 `username.github.io`

假设你的 GitHub 用户名是 `username`，并且已经在 GitHub 上创建了仓库 `username.github.io`。

1. 在本地进入项目目录：

   ```bash
   cd literary-blog-site
   ```

2. 初始化 git 仓库（如果还没有）：

   ```bash
   git init
   git add .
   git commit -m "Init personal site"
   ```

3. 关联远程仓库（把 `username` 换成你的 GitHub 用户名）：

   ```bash
   git remote add origin git@github.com:username/username.github.io.git
   # 或使用 HTTPS：
   # git remote add origin https://github.com/username/username.github.io.git
   ```

4. 推送到 `main` 分支（或 `master`）：

   ```bash
   git branch -M main
   git push -u origin main
   ```

5. 打开 GitHub 仓库的 **Settings → Pages**：

   - Source 选择 `Deploy from a branch`。
   - Branch 选择 `main`，目录选 `/ (root)`。

6. 等几分钟，访问：

   - <https://username.github.io>

即可看到你的网站。

## 自定义

- 修改 `index.html` 的文案为你的自我介绍。
- 修改 `style.css` 中的颜色变量，可以快速微调配色。
- 在 `gallery/index.html` 中替换占位元素为真实图片 `<img>` 标签。

如果你需要我帮你调整某个布局或添加功能，直接在聊天里说就行。
