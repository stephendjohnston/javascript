// JS210 - Small Problems > Easy 4


// Array Average
// -------------

// PEDAC
// -----
/*
Problem:
--------

Take an array of numbers and return the average of the sum of all the numbers
in the array.

Rules:
  Explicit
    - return a number
    - the input array will never be empty
    - the numbers will always be positive


Algorithm:
----------

- use reduce method to caculate the sum and the divide the sum by the
length of the array

*/

function average(numbers) {
  let sum = Math.floor(numbers.reduce((total, value) => total + value));
  return Math.floor(sum / numbers.length);
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40