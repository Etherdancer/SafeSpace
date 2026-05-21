/* ============================================================
   SafeSpace — js/software.js
   Filter, sort and render reviews grid on reviews.html
   ============================================================ */

import REVIEWS from '../data/software.js';
import { starsHTML, trustBadgeClass, initReveal } from './utils.js';

export function initReviews() {
  const grid      = document.getElementById('reviews-grid');
  const filterBar = document.getElementById('filter-bar');
  const osFilterBar = document.getElementById('os-filter-bar');
  const countEl   = document.getElementById('reviews-count');
  const sortSelect = document.getElementById('reviews-sort');
  if (!grid) return;

  const categories = ['All', ...new Set(REVIEWS.map(r => r.category))];
  const platforms  = ['All', ...new Set(REVIEWS.flatMap(r => r.platforms || []))];
  let activeFilter   = 'All';
  let activeOSFilter = 'All';
  let activeSort     = 'trust';

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

  // ── Sort helper ──────────────────────────────────────────────
  function sortReviews(list) {
    const copy = [...list];
    switch (activeSort) {
      case 'trust':
        return copy.sort((a, b) => b.trustScore - a.trustScore);
      case 'rating':
        return copy.sort((a, b) => b.rating - a.rating);
      case 'az':
        return copy.sort((a, b) => a.name.localeCompare(b.name));
      case 'za':
        return copy.sort((a, b) => b.name.localeCompare(a.name));
      case 'opensource':
        return copy.sort((a, b) => {
          if (a.openSource === b.openSource) return b.trustScore - a.trustScore;
          return a.openSource ? -1 : 1;
        });
      default:
        return copy;
    }
  }

  // ── Render ───────────────────────────────────────────────────
  function renderGrid() {
    const filtered = REVIEWS.filter(r => {
      const matchCat = activeFilter === 'All' || r.category === activeFilter;
      const matchOS  = activeOSFilter === 'All' || (r.platforms && r.platforms.includes(activeOSFilter));
      return matchCat && matchOS;
    });

    const sorted = sortReviews(filtered);

    if (countEl) countEl.textContent = `${sorted.length} review${sorted.length !== 1 ? 's' : ''}`;

    grid.innerHTML = '';

    if (sorted.length === 0) {
      grid.innerHTML = '<p class="empty-state">No reviews found matching these filters.</p>';
      return;
    }

    sorted.forEach((review, i) => {
      const card = createReviewCard(review);
      card.style.animationDelay = `${i * 0.07}s`;
      grid.appendChild(card);
    });

    initReveal();
  }

  renderGrid();
}

export function createReviewCard(review) {
  const a = document.createElement('a');
  a.href      = `review.html#${review.id}`;
  a.className = 'card review-card reveal';

  const badgeClass = trustBadgeClass(review.trustScore);
  const prosPreview = review.pros.slice(0, 3)
    .map(p => `<li class="review-card__pro">${p}</li>`)
    .join('');
    
  const osTags = review.platforms ? review.platforms.map(p => `<span class="tag" style="border:1px solid var(--teal);color:var(--teal);background:transparent">${p}</span>`).join('') : '';

  a.innerHTML = `
    <div class="review-card__header">
      <div class="review-card__name-wrap">
        <h3 class="review-card__name">${review.name}</h3>
        <p class="review-card__tagline">${review.tagline}</p>
        <div style="margin-top:var(--space-2)">
          ${starsHTML(review.rating)}
        </div>
      </div>
      <div class="trust-badge ${badgeClass}">
        <span class="trust-badge__score">${review.trustScore}</span>
        <span class="trust-badge__label">Trust</span>
      </div>
    </div>
    <ul class="review-card__pros">${prosPreview}</ul>
    <div class="review-card__footer" style="flex-direction:column;align-items:flex-start;gap:var(--space-2)">
      <div style="display:flex;justify-content:space-between;width:100%;align-items:center">
        <div>
          <span class="article-card__category">${review.category}</span>
          ${review.openSource ? '<span class="open-source-badge">⬡ Open Source</span>' : ''}
        </div>
        <span class="article-card__arrow">→</span>
      </div>
      <div class="tag-list" style="width:100%;flex-wrap:wrap">${osTags}</div>
    </div>
  `;
  return a;
}
