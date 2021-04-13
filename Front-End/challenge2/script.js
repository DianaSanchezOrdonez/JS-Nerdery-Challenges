/* eslint-disable indent */
/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

const result = document.querySelector('#display');

const calculatorButtons = document.querySelectorAll('button');

let numberA;
let numberB;
let operator;

function clean() {
	result.innerText = '';
}

function reset() {
	result.innerText = '';
	numberA = 0;
	numberB = 0;
	operator = '';
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
    result.innerText = res;
  }

calculatorButtons.forEach((button) => {
	if (!button.classList.value) {
		button.addEventListener('click', () => {
			result.innerText += button.innerText;
		});
	} else if (button.id !== 'equals') {
		button.addEventListener('click', () => {
			numberA = result.innerText;
			operator = button.innerText;
			//   result.innerText += operator;
			clean();
		});
	} else {
		button.addEventListener('click', () => {
			numberB = result.innerText;
			calculator();
		});
	}
});
