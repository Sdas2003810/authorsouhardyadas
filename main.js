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
  heading.textContent = 'Hello my Wattpad readers!';

  // Update button innerHTML and add waving animation class
  button.innerHTML = 'Wave Hello <span class="wave-emoji wave">👋</span>';

  // Remove animation class after animation ends to allow repeated waves
  const emoji = button.querySelector('.wave-emoji');
  emoji.addEventListener('animationend', () => {
    emoji.classList.remove('wave');
  });
});
