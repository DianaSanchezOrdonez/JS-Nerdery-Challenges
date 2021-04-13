/* eslint-disable */
// Modify this file only

const increseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const counterSpan = document.getElementById("counter");

let count = 0;

increseBtn.addEventListener('click', () => {
  count++;
  counterSpan.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count--;
  counterSpan.textContent = count;
});
