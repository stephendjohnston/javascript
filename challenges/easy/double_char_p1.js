// JS210 - Small Problems > Easy 5


// Double Char Part 1
// ------------------

// PEDAC
// -----

/*
Problem:
--------

return a new string that is the result of doubling every character of the string
argument.

Rules:
  Explicit
    - return a new string
    - double each character
  Implicit
    - spaces are included as characters and get doubled
    - empty strings return an emptry string

Algorithm:
----------
- declare an emptry string
- create a for loop that will iterate string.length times
  - on each iteration concat the current character in the input
  string to the new string, twice
- return the new string

*/

function repeater(string) {
  let newString = '';

  for (let i = 0; i < string.length; i += 1) {
    newString += string[i] + string[i];
  }

  return newString;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

// OR

function repeater(string) {
  return [...string].map(char => char + char).join('');
}