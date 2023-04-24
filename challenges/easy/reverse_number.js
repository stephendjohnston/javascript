// JS210 - Small Problems > Easy 5


// Reverse Number
// --------------

// PEDAC
// -----

/*
Problem:
--------

take a number argument and reverse the order of the digits.

Rules:
  Explicit
    - arguments will be positive integers
    - return the number with its digits reversed
  Implicit
    - numbers that end in zeroes will not have those zeros
    after reversal
    - if the argument is a single digit, nothing happens
*/


function reverseNumber(number) {
  return Number([...String(number)].reverse().join(''));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1

// Student Solution that is apparently more efficient

// (student) I time tested this, it's over 10x as fast
const reverseNumberEfficient = function reverseNumberEfficient(integer) {
  var result = 0;

  while (integer > 0) {
    let remainder = integer % 10;
    integer = (integer - remainder) / 10;

    result *= 10;
    result += remainder;
  }

  return result;
};