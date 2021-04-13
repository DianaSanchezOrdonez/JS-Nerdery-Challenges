/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/

const wrapper = document.querySelector('.wrapper');
const result = document.querySelector('#display');

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
});

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

    reset();
    result.innerText = res;
}
