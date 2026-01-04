// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // The test expects a specific format (rgb), not hex
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  
  // Set the background color in rgb format
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // The test expects empty string, not "white"
  document.body.style.backgroundColor = "";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // The test expects to update the element directly
  const displayElement = document.getElementById('keyPressDisplay');
  if (displayElement) {
    displayElement.textContent = `Key pressed: ${event.key}`;
  }
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // The test expects to update the element directly
  const inputElement = document.getElementById('textInput');
  const displayElement = document.getElementById('textInputDisplay');
  
  if (inputElement && displayElement) {
    displayElement.textContent = `You typed: ${inputElement.value}`;
  }
}

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  const changeColorButton = document.getElementById('changeColorButton');
  if (changeColorButton) {
    changeColorButton.addEventListener('click', changeBackgroundColor);
  }

  // Attach event listener to reset background color when the body is double-clicked
  const resetColorButton = document.getElementById('resetColorButton');
  if (resetColorButton) {
    resetColorButton.addEventListener('dblclick', resetBackgroundColor);
  }

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress);

  // Attach event listener to display user input in real-time as they type
  const textInput = document.getElementById('textInput');
  if (textInput) {
    textInput.addEventListener('input', displayUserInput);
  }
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};