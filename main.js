 // Select the main heading element
const heading = document.querySelector('h1');

// Create a new button element with waving emoji inside a span
const button = document.createElement('button');
button.innerHTML = 'Wave Hello <span class="wave-emoji">👋</span>';
button.className = 'mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition duration-300';

// Append the button inside the #home section
document.querySelector('#home').appendChild(button);

// Add click event listener to trigger animation and text change
button.addEventListener('click', () => {
  // Change heading text and ensure it's centered with Tailwind classes
  heading.textContent = 'Hello my Wattpad readers!';
  heading.classList.add('text-center', 'w-full');

  // Prepare the emoji span for animation
  button.innerHTML = 'Wave Hello <span class="wave-emoji">👋</span>';
  const emoji = button.querySelector('.wave-emoji');

  // Force reflow to restart animation on mobile browsers
  void emoji.offsetWidth;

  // Add the wave animation class
  emoji.classList.add('wave');

  // Remove animation class after animation ends to allow repeated waves
  emoji.addEventListener('animationend', () => {
    emoji.classList.remove('wave');
  }, { once: true });
});
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
