// JS210 - Small Problems > Easy 4


// Combining Arrays
// ----------------
/*
Write a function that takes two arrays as arguments, and returns an array 
containing the union of the values from the two. There should be no duplication 
of values in the returned array, even if there are duplicates in the original arrays. 
You may assume that both arguments will always be arrays.

Example:

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]


PEDAC
-----

Problem:
--------

Take to two input arrays and combine them together as if you were attaching
one end of the array to the other to create one whole array. The only caveat is that
there should be no duplicate values in the new combined array no matter what!

Rules:
  Explicit
    - return new array
    - no duplicate values
    - both arguments will always be arrays
  Implicit
    - arrays will be the same length
    - new array will not have the same number of values as the two argument
    arrays added together(because of no duplicates)

Algorithm:
----------

- declare and assign a new array
- concat the new array and the first array argument
- initialize a for loop and iterate over the second array argument
  - upon each iteration, check whether that element is in the new array
    - if the element already exists, go to next iteration
    - if the element does not exist, push that element into the new array
- return the new array
*/

function union(array1, array2) {
  const resultArray = [].concat(array1);
  
  for (let i = 0; i < array2.length; i += 1) {
    if (resultArray.includes(array2[i])) {
      continue;
    }
    
    resultArray.push(array2[i]);
  }

  return resultArray;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

// LS Solution:

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
                  if (!resultArray.includes(value)) {
                    resultArray.push(value);
                  }
                });
}

function union(...args) {
  const newArray = [];

  args.forEach(value => copyNonDupsTo(newArray, value));

  return newArray;
}