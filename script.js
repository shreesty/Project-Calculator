
const result = document.getElementById('result');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

let currentNumber = '';
let previousNumber = '';
let operator = '';
let calculation = '';


numbers.forEach((button) => {
  button.addEventListener('click', () => {
    currentNumber += button.value;
    result.value = currentNumber;
  });
});


operators.forEach((button) => {
  button.addEventListener('click', () => {
    if (operator !== '') {
      calculate();
    }
    previousNumber = currentNumber;
    currentNumber = '';
    operator = button.value;
  });
});


clear.addEventListener('click', () => {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  result.value = '';
});


equal.addEventListener('click', () => {
  calculate();
});


function calculate() {
  switch (operator) {
    case '+':
      calculation = add(parseFloat(previousNumber), parseFloat(currentNumber));
      break;
    case '-':
      calculation = subtract(parseFloat(previousNumber), parseFloat(currentNumber));
      break;
    case '*':
      calculation = multiply(parseFloat(previousNumber), parseFloat(currentNumber));
      break;
    case '/':
      calculation = divide(parseFloat(previousNumber), parseFloat(currentNumber));
      break;
    default:
      return;
  }
  currentNumber = calculation.toString();
  operator = '';
  result.value = calculation;
}

// Add function
function add(a, b) {
  return a + b;
}

// Subtract function
function subtract(a, b) {
  return a - b;
}

// Multiply function
function multiply(a, b) {
  return a * b;
}

// Divide function
function divide(a, b) {
  if (b === 0) {
    return 'Error';
  }
  return a / b;
}