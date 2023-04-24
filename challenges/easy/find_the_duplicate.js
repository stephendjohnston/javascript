// JS210 - Small Problems > Easy 4


// Find the Duplicate
// ------------------

// PEDAC
// -----

/*
Problem:
--------

Take an array and return the integer that occurs twice in the array. There will
only be one. 

Rules:
  Explicit
    - return an integer
    - the array is unordered

Algorithm:
----------

We could create an Object, iterate over the elements of the input array and
add each integer to the Object with the integers as keys(properties?) and the values
as some arbitrary value. We can set a condition that if the current element
to be added to the object already exists, then that element must be the duplicate
and return that value.
*/

function findDup(array) {
  const seen = {};

  for (let i = 0; i < array.length; i += 1) {
    if (seen[array[i]]) {
      return array[i];
    }

    seen[array[i]] = true;
  }
}

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73