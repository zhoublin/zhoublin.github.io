---
title: 第一篇：你好，世界
date: 2025-11-23
tags: [随笔, 起步]
---

欢迎来到我的小宇宙。

这一篇是示例文章，用来展示这个博客支持的几种内容形式：

## 标题与段落

写字这件事，大概就是给自己的思考找一个慢一点的出口。

- 支持**粗体**、*斜体*、~~删除线~~ 等 Markdown 基础语法。
- 支持引用、列表、分割线等等。

## 代码 Code

```python
def hello(name: str) -> str:
    return f"你好, {name}!"

print(hello("世界"))
```

```javascript
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));
```

## 图片 Images

你可以把图片放在 `assets/images/` 目录中，然后在 Markdown 中这样引用：

```markdown
![一张示例图片](../assets/images/example.jpg)
```

实际效果示例（如果你已经放了一张 `example.jpg`）：

![示例图片](../assets/images/example.jpg)

## 视频 Video

可以通过 HTML 的方式嵌入视频，例如：

```html
<video controls width="560">
  <source src="../assets/videos/sample.mp4" type="video/mp4" />
  你的浏览器似乎不支持 video 标签。
</video>
```

实际效果（需要你在对应目录中放一个 `sample.mp4`）：

<video controls width="560">
  <source src="../assets/videos/sample.mp4" type="video/mp4" />
  你的浏览器似乎不支持 video 标签。
</video>

## 表格 Table

| 日期       | 事件           | 备注         |
| ---------- | -------------- | ------------ |
| 2025-11-23 | 搭建个人网站   | GitHub Pages |
| 2025-??-?? | 写下这一篇文章 | to be filled |

## 公式 LaTeX

行内公式示例：$E = mc^2$。

独立公式示例：

$$
\int_{-\infty}^{+\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

MathJax 会自动帮你渲染这些公式。

---

到这里，你已经看到：

1. 如何写一篇包含多种内容的 Markdown 文章；
2. 如何插入代码、图片、视频、表格和公式；
3. 这个小站的基本排版风格。

接下来，只需要复制这篇文章，改文件名和内容，你就可以开始真正写属于自己的东西了。
