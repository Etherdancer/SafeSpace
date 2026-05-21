/* ============================================================
   SafeSpace — js/guides.js
   Filter and render articles grid on articles.html
   ============================================================ */

import ARTICLES from '../data/guides.js';
import { formatDate, starsHTML, initReveal } from './utils.js';

export function initArticles() {
  const grid       = document.getElementById('articles-grid');
  const filterBar  = document.getElementById('filter-bar');
  const countEl    = document.getElementById('articles-count');
  if (!grid) return;

  const categories = ['All', ...new Set(ARTICLES.map(a => a.category))];
  let activeFilter = 'All';

  // Build filter buttons
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'All' ? ' active' : '');
    btn.textContent = cat;
    btn.dataset.filter = cat;
    btn.id = `filter-${cat.toLowerCase().replace(/\s+/g, '-')}`;
    btn.addEventListener('click', () => {
      activeFilter = cat;
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === cat));
      renderGrid();
    });
    filterBar?.appendChild(btn);
  });

  function renderGrid() {
    const filtered = activeFilter === 'All'
      ? ARTICLES
      : ARTICLES.filter(a => a.category === activeFilter);

    if (countEl) countEl.textContent = `${filtered.length} article${filtered.length !== 1 ? 's' : ''}`;

    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = '<p class="empty-state">No articles found in this category.</p>';
      return;
    }

    filtered.forEach((article, i) => {
      const card = createArticleCard(article);
      card.style.animationDelay = `${i * 0.07}s`;
      grid.appendChild(card);
    });

    initReveal();
  }

  renderGrid();
}

export function createArticleCard(article) {
  const a = document.createElement('a');
  a.href      = `article.html#${article.id}`;
  a.className = 'card article-card reveal';

  const tags = article.tags.map(t => `<span class="tag">#${t}</span>`).join('');

  a.innerHTML = `
    <div class="article-card__meta">
      <span class="article-card__category">${article.category}</span>
      <span class="article-card__date">${formatDate(article.date)}</span>
      <span class="article-card__date">·</span>
      <span class="article-card__read-time">${article.readTime}</span>
    </div>
    <h3 class="article-card__title">${article.title}</h3>
    <p class="article-card__excerpt">${article.excerpt}</p>
    <div class="article-card__footer">
      <div class="tag-list">${tags}</div>
      <span class="article-card__arrow">→</span>
    </div>
  `;
  return a;
}
