function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

async function loadPost(slug) {
  const postMeta = (window.POSTS_INDEX || []).find(p => p.slug === slug);
  if (!postMeta) {
    document.getElementById('post-title').textContent = '未找到文章';
    document.getElementById('post-content').textContent = '检查一下链接是否正确，或返回列表页。';
    return;
  }

  document.title = `${postMeta.title} | 我的小宇宙`;
  document.getElementById('post-title').textContent = postMeta.title;
  document.getElementById('post-date').textContent = postMeta.date || '';
  document.getElementById('post-tags').textContent = (postMeta.tags || []).join(' / ');

  const contentEl = document.getElementById('post-content');

  try {
    const res = await fetch(`../posts/${slug}.md`);
    if (!res.ok) throw new Error('加载文章失败');
    const md = await res.text();

    // 使用 marked 渲染 Markdown
    const html = marked.parse(md, {
      breaks: true,
      gfm: true
    });
    contentEl.innerHTML = html;

    // 代码高亮
    document.querySelectorAll('pre code').forEach(block => {
      hljs.highlightElement(block);
    });

    // 等 MathJax 加载后渲染公式
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  } catch (e) {
    contentEl.textContent = '加载文章内容时出错，请稍后再试。';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const slug = getQueryParam('slug') || 'hello-world';
  loadPost(slug);
});
