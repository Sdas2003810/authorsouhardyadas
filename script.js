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
