const footerYearEl = document.querySelector('.js-footer-year');

if (footerYearEl) {
  footerYearEl.textContent = new Date().getFullYear();
}
