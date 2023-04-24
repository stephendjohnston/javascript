"use strict";
// JS210 Small Problems > Easy 5

// Always Return Negative

/*
Write a function that takes a number as an argument. If the argument is a 
positive number, return the negative of that number. If the argument is a 
negative number, return it as-is.
*/

function negative(number) {
  return -Math.abs(number);
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
console.log(negative(-0));    // -0