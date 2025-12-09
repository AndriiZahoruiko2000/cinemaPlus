const navLinks = document.querySelectorAll('.header-menu-link');
const themeToggle = document.querySelector('.theme-toggle');
const THEME_KEY = 'cinemaplus-theme';

setActiveNavLink();
initTheme();

function setActiveNavLink() {
  const currentPath = normalizePath(window.location.pathname);
  navLinks.forEach(link => {
    const linkPath = normalizePath(new URL(link.href, window.location.origin).pathname);
    link.classList.toggle('header-menu-link--active', linkPath === currentPath);
  });
}

function normalizePath(pathname) {
  if (!pathname || pathname === '/') {
    return '/index.html';
  }
  return pathname;
}

function initTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(storedTheme);
  if (themeToggle) {
    themeToggle.checked = storedTheme === 'light';
    themeToggle.addEventListener('change', () => {
      const nextTheme = themeToggle.checked ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
  } else {
    root.removeAttribute('data-theme');
  }
  localStorage.setItem(THEME_KEY, theme);
}
