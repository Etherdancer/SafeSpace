/* ============================================================
   SafeSpace — js/reader.js
   Hash-based single article / review loader
   ============================================================ */

import ARTICLES from '../data/guides.js';
import REVIEWS  from '../data/software.js';
import { formatDate, starsHTML, trustBadgeClass } from './utils.js';

/* ── Article reader ────────────────────────────────────────── */
export function initArticleReader() {
  const container = document.getElementById('article-reader');
  if (!container) return;

  const id      = window.location.hash.slice(1);
  const article = ARTICLES.find(a => a.id === id);

  if (!article) {
    container.innerHTML = `
      <div class="not-found">
        <div class="not-found__icon">🔍</div>
        <h2 class="not-found__title">Article not found</h2>
        <p class="not-found__text">The article you're looking for doesn't exist or has been moved.</p>
        <a href="articles.html" class="btn btn-primary">Browse all articles</a>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${article.title} — SafeSpace`;

  const tags = article.tags.map(t => `<span class="tag">#${t}</span>`).join('');

  container.innerHTML = `
    <div class="reader page-fade">
      <a href="articles.html" class="reader__back">← Back to articles</a>

      <div class="reader__meta">
        <span class="article-card__category">${article.category}</span>
        <span class="article-card__date">${formatDate(article.date)}</span>
        <span class="article-card__date">·</span>
        <span class="article-card__read-time">${article.readTime}</span>
      </div>

      <h1 class="reader__title">${article.title}</h1>

      <blockquote class="reader__excerpt">${article.excerpt}</blockquote>

      <div class="reader__divider"></div>

      <div class="prose">
        ${article.content}
      </div>

      <div class="reader__divider"></div>

      <div class="tag-list">${tags}</div>
    </div>
  `;
}

/* ── Review reader ─────────────────────────────────────────── */
export function initReviewReader() {
  const container = document.getElementById('review-reader');
  if (!container) return;

  const id     = window.location.hash.slice(1);
  const review = REVIEWS.find(r => r.id === id);

  if (!review) {
    container.innerHTML = `
      <div class="not-found">
        <div class="not-found__icon">🔍</div>
        <h2 class="not-found__title">Review not found</h2>
        <p class="not-found__text">The review you're looking for doesn't exist or has been moved.</p>
        <a href="reviews.html" class="btn btn-primary">Browse all reviews</a>
      </div>
    `;
    return;
  }

  document.title = `${review.name} Review — SafeSpace`;

  const badgeClass = trustBadgeClass(review.trustScore);
  const platforms = review.platforms.map(p => `<span class="pill platform">${p}</span>`).join('');
  const pros = review.pros.map(p => `<div class="pros-cons-item">${p}</div>`).join('');
  const cons = review.cons.map(c => `<div class="pros-cons-item">${c}</div>`).join('');

  container.innerHTML = `
    <div class="reader page-fade">
      <a href="reviews.html" class="reader__back">← Back to reviews</a>

      <div class="review-reader__scorecard">
        <div>
          <h1 class="review-reader__name">${review.name}</h1>
          <p class="review-reader__tagline">${review.tagline}</p>
          <div style="margin-top:var(--space-3); display:flex; gap:var(--space-3); align-items:center; flex-wrap:wrap;">
            ${starsHTML(review.rating)}
            ${review.openSource ? '<span class="open-source-badge">⬡ Open Source</span>' : ''}
          </div>
          <div class="review-reader__pills" style="margin-top:var(--space-3)">
            <span class="pill">💰 ${review.pricing}</span>
            <span class="pill">🔍 Audited by ${review.auditedBy}</span>
            ${platforms}
          </div>
        </div>
        <div class="trust-badge ${badgeClass}" style="width:72px;height:72px;">
          <span class="trust-badge__score" style="font-size:var(--text-2xl)">${review.trustScore}</span>
          <span class="trust-badge__label">/ 100</span>
        </div>
      </div>

      <div class="verdict-box">
        <div class="verdict-box__label">⚖️ Our Verdict</div>
        <p class="verdict-box__text">${review.verdict}</p>
      </div>

      <div class="pros-cons-grid">
        <div class="pros-cons-box pros">
          <div class="pros-cons-box__title">✓ Pros</div>
          ${pros}
        </div>
        <div class="pros-cons-box cons">
          <div class="pros-cons-box__title">✗ Cons</div>
          ${cons}
        </div>
      </div>

      <div class="reader__divider"></div>

      <div class="prose">
        ${review.content}
      </div>

      <div class="reader__divider"></div>

      <div style="text-align:center; padding-block: var(--space-4)">
        <span class="article-card__category">${review.category}</span>
      </div>
    </div>
  `;
}
