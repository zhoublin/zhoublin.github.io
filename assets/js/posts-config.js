// 简单文章索引。每篇文章对应 posts/ 目录下一个 markdown 文件。
// slug 对应文件名，例如 slug: "hello-world" => posts/hello-world.md

window.POSTS_INDEX = [
  {
    slug: 'hello-world',
    title: '第一篇：你好，世界',
    date: '2025-11-23',
    tags: ['随笔', '起步'],
    excerpt: '一篇示例文章，展示如何使用 Markdown 写博客，以及代码、图片、表格和公式的效果。'
  },
  // 后续可以在这里继续添加文章配置
  {
  slug: '2025-hello-markdown',      // 与文件名一致（去掉 .md）
  title: '我的第二篇文章',
  date: '2025-11-24',
  tags: ['日常', 'demo'],
  excerpt: '一句简短的摘要，用来显示在列表和首页。'
  }
];
