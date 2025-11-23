document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // 主页最近文章填充
  if (document.getElementById('home-post-list') && window.POSTS_INDEX) {
    const list = document.getElementById('home-post-list');
    const latest = [...window.POSTS_INDEX].sort((a, b) => (b.date || '').localeCompare(a.date || '')); // 简单排序
    latest.slice(0, 3).forEach(p => {
      const card = document.createElement('article');
      card.className = 'post-card';
      card.innerHTML = `
        <h3 class="post-card-title">${p.title}</h3>
        <div class="post-card-meta">
          <span>${p.date || ''}</span>
          <span>${(p.tags || []).join(' / ')}</span>
        </div>
        <p class="post-card-excerpt">${p.excerpt || ''}</p>
      `;
      card.addEventListener('click', () => {
        window.location.href = `blog/post.html?slug=${encodeURIComponent(p.slug)}`;
      });
      list.appendChild(card);
    });
  }

  // 简单相册 lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  if (lightbox && lightboxImg) {
    document.querySelectorAll('.gallery-item img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
      });
    });
    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    });
  }
});
