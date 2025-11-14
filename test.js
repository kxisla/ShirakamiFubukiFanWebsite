// Hamburger menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('nav-menu--open');
  });
}

// Dark / Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// đọc theme đã lưu
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-theme');
  if (themeToggle) themeToggle.textContent = 'Light mode';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-theme');
    themeToggle.textContent = isDark ? 'Light mode' : 'Dark mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}
