"use strict";

/*
inputs: array
- may contain numbers or strings

outputs: Sorted array
- lowest to highest

Rules:
- if input array is numbers, sort from lowest to highest
- if input array is strings, sort alphabetically
- stop sorting when a pass is made through the array with making any swaps
- the function should mutate the array
- assume the input array will contain at least two elements

Mental Model:
Iterate through the array and compare each element in the array with the element next to it. Remember to 
stop comparing at the second last digit, as comparing the last digit with the next digit will be comparing
with a non-existent element. If a swap is made between two elements, use a variable to indicate that a swap
has been made. This will be used in a while loop, to keep looping while a swap has been made. 

Algorithm:
- initialize variable to keep track if a swap has been made
- create a while loop that iterates while previous varible is true.
  - create for loop that iterates from 0 up the length of the array minus 1
  - on each loop, check if the previous element is greater than the next element
    - if it is, swap the elements
    - change value of swap variable
-
*/

function bubbleSort(array) {
  while (true) {
    let swapMade = false;

    for (let i = 0; i < array.length - 1; i++) {
      let [el1, el2] = [array[i], array[i + 1]];

      if (el1 > el2) {
        [array[i], array[i + 1]] = [el2, el1];
        swapMade = true;
      }
    }

    if (!swapMade) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]