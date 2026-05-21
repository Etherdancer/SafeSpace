/* ============================================================
   SafeSpace — js/nav.js
   Sticky header, hamburger menu, active link highlighting
   ============================================================ */

export function initNav() {
  const nav       = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const drawer    = document.querySelector('.nav__drawer');

  // ── Scroll: add 'scrolled' class once user scrolls ──────────
  let lastScroll = 0;
  const onScroll = () => {
    const y = window.scrollY;
    if (y > 10) nav?.classList.add('scrolled');
    else         nav?.classList.remove('scrolled');
    lastScroll = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load

  // ── Hamburger toggle ─────────────────────────────────────────
  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    drawer?.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close drawer when a link inside it is clicked
  drawer?.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      drawer.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on backdrop click (outside drawer)
  document.addEventListener('click', e => {
    if (drawer?.classList.contains('open') &&
        !drawer.contains(e.target) &&
        !hamburger?.contains(e.target)) {
      hamburger?.classList.remove('open');
      drawer.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // ── Active link ───────────────────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === currentPage ||
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'article.html' && href === 'articles.html') ||
        (currentPage === 'review.html'  && href === 'reviews.html')) {
      link.classList.add('active');
    }
  });
}
