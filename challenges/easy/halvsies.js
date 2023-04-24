// JS210 - Small Problems > Easy 4


// Halvsies
// --------


// PEDAC
// -----

/*
Problem:
--------
Take an array argument of any number of elements and return a new array with,
two arrays as elements of that array. Each array should contain half of the 
original array aruments elements. If there is an odd number of elements,
the first array element of the new array should have the extra element.

Rules:
  Explicit
    - return a new array with two array elements
    - each array element should contain half of the original array elements
      - if there is an odd number of elements, the first array element will
      have the extra element
  Implicit
    - if the argument array is empty, return an array with two empty array
    elements

Algorithm:
----------

find the middle index of the argument array, then iterate over the elements.
if the current index is less than the middle index, add the elements at the 
current index to the first element array of the new array. If the current index
is >= to the middle index, add the current element at the index to the second
array element of the new array.

- declare and initialize new array with two array elements
- use the length property / 2 to find the middle index of the input array
- create a for loop to iterate over the input array elements start at index 0
  - if the current index < middle index
    - push the current element into the first array element of the new array
  - if the current index >= middle index
    - push the current element into the second array element of the new array


*/

function halvsies(array) {
  const resultArray = [[],[]];
  const middleIndex = array.length / 2;

  for (let i = 0; i < array.length; i += 1) {
    if (i < middleIndex) {
      resultArray[0].push(array[i]);
    } else {
      resultArray[1].push(array[i]);
    }
  }

  console.log(resultArray);
  return resultArray;
}


halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

// LS Solution:

function halvsies(array) {
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half);

  return [firstHalf, secondHalf];
}