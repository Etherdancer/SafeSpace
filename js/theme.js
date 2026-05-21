/* ============================================================
   SafeSpace — js/theme.js
   Light / dark toggle stored in sessionStorage only
   (no cookies, no localStorage cross-session persistence)
   ============================================================ */

const STORAGE_KEY = 'ss-theme';
const THEMES = ['dark', 'light'];

export function initTheme() {
  // Default is always dark; honour session preference if set
  const stored = sessionStorage.getItem(STORAGE_KEY);
  const theme  = THEMES.includes(stored) ? stored : 'dark';
  applyTheme(theme);

  // Wire up any toggle buttons on the page
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
    updateToggleUI(btn, theme);
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  sessionStorage.setItem(STORAGE_KEY, theme);
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => updateToggleUI(btn, theme));
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

function updateToggleUI(btn, theme) {
  btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  btn.title       = theme === 'dark' ? 'Light mode' : 'Dark mode';
}
