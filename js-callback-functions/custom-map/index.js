function myMap(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
  console.log(array);
}

function doubleNumber(number) {
  return number * 2;
}

const numbers = [1, 2, 3, 4, 5];

myMap(numbers, doubleNumber);
