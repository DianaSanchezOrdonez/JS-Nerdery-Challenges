/* eslint-disable */
/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

const display = document.querySelector('#display');
const calculatorButtons = document.querySelectorAll('button');

const calculator = {
	displayValue: '0',
	firstOperand: null,
	waitingSecondOperand: false,
	operator: null,
};

function calculate(firstOperand, secondOperand, operator) {
	if (operator === '+') {
    	return firstOperand + secondOperand;
  	} else if (operator === '-') {
    	return firstOperand - secondOperand;
  	} else if (operator === 'X') {
    	return firstOperand * secondOperand;
  	} else if (operator === '/') {
    	return firstOperand / secondOperand;
  	}
  return secondOperand;
}

function handleOperator(nextOperator) {
	const { firstOperand, displayValue, operator } = calculator;
	const inputValue = parseFloat(displayValue);

	if (operator && calculator.waitingSecondOperand) {
		calculator.operator = nextOperator;
    	return;
 	};	

	if (firstOperand == null && !isNaN(inputValue)) {
		calculator.firstOperand = inputValue;
	
	} else if (operator) {
		const result = calculate(firstOperand, inputValue, operator);

		calculator.displayValue = result;
		calculator.firstOperand = result;
  	}

	calculator.waitingSecondOperand = true;
	calculator.operator = nextOperator;
}

function digitEachNumber(digit) {
	const { displayValue, waitingSecondOperand } = calculator;

	if (waitingSecondOperand === true) {
		calculator.displayValue = digit;
		calculator.waitingSecondOperand = false;
  	} else {
    	calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  	}
}

function resetCalculator() {
	calculator.displayValue = '0';
	calculator.firstOperand = null;
	calculator.waitingSecondOperand = false;
	calculator.operator = null;
}

function updateDisplay() {
	display.innerText = calculator.displayValue;
}

updateDisplay();

calculatorButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const { id, innerText } = button;
		
		if ( id === 'add' || id === 'subtrack' || id === 'multiplication' || id === 'division' || id === 'equals') {
			handleOperator(innerText);
		} else if ( id === 'clean' ){
			resetCalculator();
		} else {
			digitEachNumber(innerText);
		}
		updateDisplay();
	});
});
