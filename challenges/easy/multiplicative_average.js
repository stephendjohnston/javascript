// JS210 - Small Problems > Easy 4


// Multiplicative Average
// ----------------------

// PEDAC
// -----

/*
Problem:
--------

take an array of integers and calculate the product of those integers,
divide the product by the number of integers in the array and return the
quotient as a string with three decimals.

Rules:
  Explicit
    - return a string
    - string should have three decimals
  Implicit
    - all positive integers
    - any number of integers in array

Algorithm:
----------

- calculate the product of the array using the reduce method
- use the length property to determine the number of elements in the array
- divide the product by the length
- round to three decimals
- return that number as a String
*/

function showMultiplicativeAverage(array) {
  let product = array.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
  }, 1);

  return (product / array.length).toFixed(3);
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// Condensed version of above

function showMultiplicativeAverage(arr) {
  return (arr.reduce((acc, num) => acc * num, 1) / arr.length).toFixed(3)
}