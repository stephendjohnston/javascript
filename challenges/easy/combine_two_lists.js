// JS210 - Small Problems > Easy 4


// Combine Two Lists
// -----------------

// PEDAC
// -----

/*
Problem:
--------

Take two arrays, and combine them into one array with each element from each
array appearing in alternation in the new array.

Rules:
  Explicit
    - return a new array
    - both input arrays will be non-empty
    - both input arrays will be the same length


Algorithm:
----------

- declare and initialize a new array
- create a for loop that will loop the number of times equal to an input array
length
- upon each iteration, push the element at the current index from the first array
and the element at the current index of the second array into the new array
- return the new array

*/

function interleave(...args) {
  const combined = [];

  for (let i = 0; i < args[0].length; i += 1) {
    combined.push(args[0][i], args[1][i]);
  }

  return combined;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]