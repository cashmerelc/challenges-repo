console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  if (form.addition.checked) {
    result = add(Number(form.numberA.value), Number(form.numberB.value));
  }
  if (form.subtraction.checked) {
    result = subtract(form.numberA.value, form.numberB.value);
  }
  if (form.multiplication.checked) {
    result = multiply(form.numberA.value, form.numberB.value);
  }
  if (form.division.checked) {
    result = divide(form.numberA.value, form.numberB.value);
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
