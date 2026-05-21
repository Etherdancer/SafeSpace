/* ============================================================
   SafeSpace — js/utils.js
   Shared utility functions
   ============================================================ */

export function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function starsHTML(rating, max = 5) {
  let html = '<div class="stars">';
  for (let i = 1; i <= max; i++) {
    html += `<span class="${i <= rating ? '' : 'empty'}">★</span>`;
  }
  html += '</div>';
  return html;
}

export function trustBadgeClass(score) {
  if (score >= 90) return 'high';
  if (score >= 75) return 'good';
  return 'ok';
}

/* Intersection Observer for .reveal elements */
export function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}
