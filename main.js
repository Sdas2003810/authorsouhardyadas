// Select the heading and change text on button click
const heading = document.querySelector('h1');

const button = document.createElement('button');
button.textContent = 'Say Hello 👋';
button.className = 'mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition duration-300';

document.querySelector('#home').appendChild(button);

button.addEventListener('click', () => {
  heading.textContent = 'Hello My Wattpad Readers!';
  button.textContent = 'Clicked!';
});
