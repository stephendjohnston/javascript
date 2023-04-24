// JS210 - Small Problems > Easy 4


// Multiply Lists
// --------------

// PEDAC
// -----
/*
Problem:
--------

Write a function that takes two array arguments, each containing a list of 
numbers, and returns a new array that contains the product of each pair of 
numbers from the arguments that have the same index.

Rules:
  Explicit
    - returns a new array
    - argument arrays will contain the same number of elements
    - mulitply array1[0] * array2[0] to get newArray[0] value.

Algorithm:
----------


*/

function multiplyList(array1, array2) {
  let newArray = [];

  for (let i = 0; i < array1.length; i += 1) {
    newArray[i] = array1[i] * array2[i];
  }

  return newArray;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]