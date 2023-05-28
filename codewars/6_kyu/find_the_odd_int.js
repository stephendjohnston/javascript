/*
Find the odd int
----------------

Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

input: array of integers
output: number

Rules:
- input is array of integers
- there will always be one integer that appears odd number of times in array
- output will be the integer that appears odd number of times

Examples:
findOdd([7], 7);
findOdd([0], 0);
findOdd([1,1,2], 2);
findOdd([0,1,0,1,0], 0);
findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1], 4);

Mental Model:
Iterate over the array of numbers and build an object that has the current number as the key and the
current count of that number as the value. 
Then iterate over the keys of the object and find the key that has a value that is odd and return
that key.

Alogrithm:
- create count object to count number of appearance per integer
- iterate over the array of integers
  - if the integer already exists, increment its value by 1
  - if it doesn't exist, set the value to 1
- iterate over the keys of the object
  - for each key, check the value and if the value is odd, then return it
*/

function findOdd(arr) {
  const count = {};

  arr.forEach(int => {
    if (!count[int]) {
      count[int] = 0;
    }

    count[int] += 1;
  });

  for (let key in count) {
    if (count[key] % 2 === 1) {
      return Number(key)
    }
  }
}

console.log(findOdd([7]) === 7)
console.log(findOdd([0]) === 0)
console.log(findOdd([1,1,2]) === 2)
console.log(findOdd([0,1,0,1,0]) === 0)
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]) === 4)