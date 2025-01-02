const display = document.getElementById('display');

function appendCharacter(char) {
  if (display.innerText === '0') {
    display.innerText = char;
  } else {
    display.innerText += char;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculate() {
  try {
    display.innerText = eval(display.innerText); // Use with caution (not safe for user input in production)
  } catch (error) {
    display.innerText = 'Error';
  }
}
