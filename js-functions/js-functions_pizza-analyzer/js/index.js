console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(a, b) {
  let area1 = a * Math.PI;
  let area2 = b * Math.PI;

  let relativeChange = ((area2 - area1) / area1) * 100;

  output.textContent = Math.round(relativeChange);
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  let displaySize = (newSize / 24) * 100;
  pizzaElement.style.width = displaySize + "px";
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2) {
  if (size1 > size2) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
