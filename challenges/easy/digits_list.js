// JS210 - Small Problems > Easy 4


// Digits List
// -----------

// PEDAC
// -----
/*
Problem:
--------

Take an integer and return an array with each digit
from the number as elements of the new array.

Rules:
  Explicit
    - return an array
    - the elements are the individual digits of the input number
  Implicit
    - Arguments will have at least one number

Algorithm:
----------

- convert the number to a string
- split the string into array of characters
- loop over the array and coerce each character back into a Number
  - could use map method as well
- return the array
*/


function digitList(number) {
  return String(number).split('').map(el => Number(el));
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

// OR

function digitList(num) {
  return [...String(num)].map(Number);
}