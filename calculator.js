const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => b === 0 ? "Argh, can't divide by zero!" : a/b;

let displayValue = null;
let input = "";
let firstNumber;
let operation;
let secondNumber;

const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener('click', () => {
  changeDisplay(numberButton.getAttribute("value"));  
  });
});

const changeDisplay = function(input) {
  let currentDisplay = display.textContent;
  currentDisplay += input;
  display.textContent = currentDisplay;
}

const operatorButtons = document.querySelectorAll(".operators");
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener('click', () => {
    firstNumber = Number(display.textContent);
    operation = operatorButton.id;
    clearDisplay();
  }
  )});

  const equalsButton = document.querySelector(".equals");
  equalsButton.addEventListener('click', () => {
    secondNumber = Number(display.textContent);
    display.textContent = operate(firstNumber, secondNumber, operation);
  });
  
  const operate = function(firstNumber, secondNumber, operation) {
    switch (operation) {
      case 'add':
        return add(firstNumber, secondNumber);
      case 'subtract':
        return subtract(firstNumber, secondNumber);
      case 'multiply':
        return multiply(firstNumber, secondNumber);
      case 'divide':
        return divide(firstNumber, secondNumber);
     }
  }

  const clearDisplay = function() {
    display.textContent = "";
  }
  




