// array of static colors
const staticColors = ['red', 'yellow', 'pink', 'blue', 'orange', 'black', 'purple'];

// get elements 
let box = document.getElementById('box');
let button = document.getElementById('button');
let colorResult = document.getElementById('color-result');

// Method for HEXcolors generation
function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// add event listener
button.addEventListener('click', function() {
  // randomizer of static or HEX colors
  const randomColors = Math.random() < 0.5 ? staticColors[Math.floor(Math.random() * staticColors.length)] : generateRandomColor();

  colorResult.innerText = randomColors;
  box.style.background = randomColors;
});

