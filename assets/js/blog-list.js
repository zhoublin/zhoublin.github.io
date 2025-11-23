document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('post-list');
  if (!container || !window.POSTS_INDEX) return;

  const posts = [...window.POSTS_INDEX].sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  posts.forEach(p => {
    const row = document.createElement('div');
    row.className = 'post-list-item';
    row.innerHTML = `
      <div class="post-list-item-title">
        <a href="post.html?slug=${encodeURIComponent(p.slug)}">${p.title}</a>
      </div>
      <div class="post-list-item-meta">
        <span>${p.date || ''}</span>
        ${p.tags && p.tags.length ? `<span>${p.tags.join(' / ')}</span>` : ''}
      </div>
    `;
    container.appendChild(row);
  });
});
