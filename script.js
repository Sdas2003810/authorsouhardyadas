// Minimal JS for smooth scrolling navigation
const links = document.querySelectorAll('nav a');
for (const link of links) {
  link.addEventListener('click', function(e) {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
}
const themeToggle = document.getElementById('theme-toggle');

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    themeToggle.textContent = 'Light Mode';
  } else {
    document.documentElement.classList.remove('dark');
    themeToggle.textContent = 'Dark Mode';
  }
  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme('dark');
} else {
  setTheme('light');
}

themeToggle.addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});
