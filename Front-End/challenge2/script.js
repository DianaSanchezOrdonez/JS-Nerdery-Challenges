/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

const wrapper = document.querySelector('.wrapper');
const result = document.querySelector('#display');

// const zero = document.getElementById('zero');
// const one = document.getElementById('one');
// const two = document.getElementById('two');
// const three = document.getElementById('three');
// const four = document.getElementById('four');
// const five = document.getElementById('five');
// const six = document.getElementById('six');
// const seven = document.getElementById('seven');
// const eight = document.getElementById('eight');
// const nine = document.getElementById('nine');

// const division = document.getElementById('division');
// const multiplication = document.getElementById('multiplication');
// const subtrack = document.getElementById('subtrack');
// const add = document.getElementById('add');
// const equals = document.getElementById('equals');

const calculatorButtons = document.querySelectorAll('button');

let numberA, numberB, operator;

calculatorButtons.forEach( button => {
    if( !button.classList.value ){
        button.addEventListener('click', e => {
            result.innerText = result.innerText + button.innerText;
        })
    }else if( button.id != 'equals') {
        button.addEventListener('click', e => {
            numberA = result.innerText;
            operator = button.innerText;
            clean();
        })
    }else{
        button.addEventListener('click', e => {
            numberB = result.innerText;
            calculator();
        })
    }
})

// zero.addEventListener('click', (e) => {
//     result.innerText = result.innerText + '0';
// });

// one.addEventListener('click', (e) => {
//     result.innerText = result.innerText + '1';
// });

// two.addEventListener('click', (e) => {
//     result.innerText = result.innerText + '2';
// });

// three.addEventListener('click', (e) => {
//     result.innerText = result.innerText + '3';
// });

// four.addEventListener('click', (e) => {
//     result.innerText = result.innerText + '4';
// });

// five.addEventListener('click', (e) => {
//     result.innerText = result.innerText + '5';
// });

// six.addEventListener('click', (e) => {
//     result.innerText = result.innerText + '6';
// });

// seven.addEventListener('click', (e) => {
//     result.innerText = result.innerText + '7';
// });

// eight.addEventListener('click', (e) => {
//     result.innerText = result.innerText + '8';
// });

// nine.addEventListener('click', (e) => {
//     result.innerText = result.innerText + '9';
// });

// add.addEventListener('click', (e) => {
//     numberA = result.innerText;
//     operator = '+';
//     clean();
// });

// subtrack.addEventListener('click', (e) => {
//     numberA = result.innerText;
//     operator = '-';
//     clean();
// });

// multiplication.addEventListener('click', (e) => {
//     numberA = result.innerText;
//     operator = 'X';
//     clean();
// });

// division.addEventListener('click', (e) => {
//     numberA = result.innerText;
//     operator = '/';
//     clean();
// });

// equals.addEventListener('click', (e) => {
//     numberB = result.innerText;
//     calculator();
// })

function clean(){
    result.innerText = '';
}

function reset(){
    result.innerText = '';
    numberA = 0;
    numberB = 0;
    operator = '';
}

function calculator(){
    let res;
    if(operator === '+'){
        res = parseFloat(numberA) + parseFloat(numberB);
    }else if(operator === '-'){
        res = parseFloat(numberA) - parseFloat(numberB);
    }else if(operator === 'X'){
        res = parseFloat(numberA) * parseFloat(numberB);
    }else{
        res = parseFloat(numberA) / parseFloat(numberB);
    }
    console.log('res', res);
    reset();
    result.innerText = res;
}
