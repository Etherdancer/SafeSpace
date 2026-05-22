/* ============================================================
   SafeSpace — js/guides.js
   Filter, sort and render articles grid on articles.html
   ============================================================ */

import ARTICLES from '../data/guides.js';
import { formatDate, starsHTML, initReveal } from './utils.js';

export function initArticles() {
  const grid       = document.getElementById('articles-grid');
  const filterBar  = document.getElementById('filter-bar');
  const osFilterBar = document.getElementById('os-filter-bar');
  const countEl    = document.getElementById('articles-count');
  const sortSelect = document.getElementById('articles-sort');
  if (!grid) return;

  const categories = ['All', ...new Set(ARTICLES.map(a => a.category))];
  const platforms  = ['All', ...new Set(ARTICLES.flatMap(a => a.platforms || []))];
  let activeFilter   = 'All';
  let activeOSFilter = 'All';
  let activeSort     = 'newest';

  // ── Category filter buttons ──────────────────────────────────
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

  // ── OS filter buttons ────────────────────────────────────────
  platforms.forEach(os => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (os === 'All' ? ' active' : '');
    btn.textContent = os;
    btn.dataset.os = os;
    btn.id = `filter-os-${os.toLowerCase().replace(/\s+/g, '-')}`;
    btn.addEventListener('click', () => {
      activeOSFilter = os;
      if (osFilterBar) osFilterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.os === os));
      renderGrid();
    });
    if (osFilterBar) osFilterBar.appendChild(btn);
  });

  // ── Sort select ──────────────────────────────────────────────
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      activeSort = sortSelect.value;
      renderGrid();
    });
  }

  // ── Helpers ──────────────────────────────────────────────────
  function readMinutes(readTime) {
    // e.g. "14 min read" → 14
    const m = readTime && readTime.match(/(\d+)/);
    return m ? parseInt(m[1], 10) : 0;
  }

  function sortArticles(list) {
    const copy = [...list];
    switch (activeSort) {
      case 'newest':
        return copy.sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'oldest':
        return copy.sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'az':
        return copy.sort((a, b) => a.title.localeCompare(b.title));
      case 'za':
        return copy.sort((a, b) => b.title.localeCompare(a.title));
      case 'shortest':
        return copy.sort((a, b) => readMinutes(a.readTime) - readMinutes(b.readTime));
      case 'longest':
        return copy.sort((a, b) => readMinutes(b.readTime) - readMinutes(a.readTime));
      default:
        return copy;
    }
  }

  // ── Render ───────────────────────────────────────────────────
  function renderGrid() {
    const filtered = ARTICLES.filter(a => {
      if (a.draft) return false;
      const matchCat = activeFilter === 'All' || a.category === activeFilter;
      const matchOS  = activeOSFilter === 'All' || (a.platforms && a.platforms.includes(activeOSFilter));
      return matchCat && matchOS;
    });

    const sorted = sortArticles(filtered);

    if (countEl) countEl.textContent = `${sorted.length} article${sorted.length !== 1 ? 's' : ''}`;

    grid.innerHTML = '';

    if (sorted.length === 0) {
      grid.innerHTML = '<p class="empty-state">No articles found matching these filters.</p>';
      return;
    }

    sorted.forEach((article, i) => {
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
  const osTags = article.platforms ? article.platforms.map(p => `<span class="tag" style="border:1px solid var(--teal);color:var(--teal);background:transparent">${p}</span>`).join('') : '';

  a.innerHTML = `
    <div class="article-card__meta">
      <span class="article-card__category">${article.category}</span>
      <span class="article-card__date">${formatDate(article.date)}</span>
      <span class="article-card__date">·</span>
      <span class="article-card__read-time">${article.readTime}</span>
    </div>
    <h3 class="article-card__title">${article.title}</h3>
    <p class="article-card__excerpt">${article.excerpt}</p>
    <div class="article-card__footer" style="flex-direction:column;align-items:flex-start;gap:var(--space-2)">
      <div class="tag-list">${tags}</div>
      <div style="display:flex;justify-content:space-between;width:100%;align-items:center">
        <div class="tag-list">${osTags}</div>
        <span class="article-card__arrow">→</span>
      </div>
    </div>
  `;
  return a;
}
