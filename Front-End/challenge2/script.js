/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

const display = document.querySelector('#display');
const calculatorButtons = document.querySelectorAll('button');
display.innerText = 0;

let numberA;
let numberB;
let operator;
let result = '';

function clean() {
	result = '';
}

function reset() {
	display.innerText = 0;
	numberA = 0;
	numberB = 0;
	operator = '';
	result = '';
}

function calculator() {
	let res;
	if (operator === '+') {
		res = parseFloat(numberA) + parseFloat(numberB);
	} else if (operator === '-') {
		res = parseFloat(numberA) - parseFloat(numberB);
	} else if (operator === 'X') {
		res = parseFloat(numberA) * parseFloat(numberB);
	} else {
		res = parseFloat(numberA) / parseFloat(numberB);
	}

	reset();
	display.innerText = res;
	result = res;
}

calculatorButtons.forEach((button) => {
	if (!button.classList.value) {
		button.addEventListener('click', () => {
			display.innerText += button.innerText;
			display.innerText = display.innerText.replace('0', '');
			result += button.innerText;
		});
	} else if (button.id !== 'equals' && button.id !== 'clean') {
		button.addEventListener('click', () => {
			numberA = result;
			operator = button.innerText;
			display.innerText += operator;
			clean();
		});
	} else if (button.id === 'clean') {
		button.addEventListener('click', () => reset());
	} else {
		button.addEventListener('click', () => {
			numberB = result;
			display.innerText += numberB;
			calculator();
		});
	}
});
