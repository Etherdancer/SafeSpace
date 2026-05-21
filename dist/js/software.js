/* ============================================================
   SafeSpace — js/software.js
   Filter and render reviews grid on reviews.html
   ============================================================ */

import REVIEWS from '../data/software.js';
import { starsHTML, trustBadgeClass, initReveal } from './utils.js';

export function initReviews() {
  const grid      = document.getElementById('reviews-grid');
  const filterBar = document.getElementById('filter-bar');
  const countEl   = document.getElementById('reviews-count');
  if (!grid) return;

  const categories = ['All', ...new Set(REVIEWS.map(r => r.category))];
  let activeFilter = 'All';

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
      ? REVIEWS
      : REVIEWS.filter(r => r.category === activeFilter);

    if (countEl) countEl.textContent = `${filtered.length} review${filtered.length !== 1 ? 's' : ''}`;

    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = '<p class="empty-state">No reviews found in this category.</p>';
      return;
    }

    filtered.forEach((review, i) => {
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
    <div class="review-card__footer">
      <span class="article-card__category">${review.category}</span>
      ${review.openSource ? '<span class="open-source-badge">⬡ Open Source</span>' : ''}
      <span class="article-card__arrow">→</span>
    </div>
  `;
  return a;
}
