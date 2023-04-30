/*
You will be given an Array(a), starting position (i) and number of portion to return (n) . Your task is to return n portion of the array (a) starting from position (i ). The starting position could be negative, in that case you should start counting reverse direction till you get all your n portion. In case you can not find the exact n portion of elements counting from the starting position i or the starting position i is out of the index of the array, you should return -1 

Example:

function p([1,2,3,4],1,2)
 should return [2,3]
 
 how ?
 Array => [1,2,3,4]
           | | | |
 index =>  0 1 2 3
 portion     |_|   => [2,3]
 
function p([1,2,3,4],-1,2)
 should return [2,3]
 
 how ?
 Array => [1,  2,  3, 4]
           |   |   |  |
 index=>   -3 -2  -1  0
 portion=>     |___|      =>[2,3]    
 
function p([1],1,5)
 should return -1

how ? 
Array => [1]
          | 
index=>   0
required starting index =>1 , which does not exist so we return -1

--------------PEDAC----------------

input: array, two integers
output: array or -1

Rules:
- input array is array of integers
- first input int is starting position (index)
  - start postion can be negative meaning you count backwards from the end of the array to get the start position
- second input int is number of ints to return in array (return array size will be equal to this number)
  - if the start position is negative, then we continue continue backwards from start point to get required portion of array
- if start position does not exist in array or you cannot retrieve required number of elements from array, return -1.
  - if required portion > array length -> return -1
  - if start index does not exist -> return -1


Data Structures:
- array
- integers

Mental Model:
If the index does not exist in the array, or if the portion size exceeds the range of available numbers, retrun -1.
If the index is positive, slice the array from the start index to the start index + portion size.
...

*/

function portion(a,i,n) {
  const isNeg = i < 0

  i = Math.abs(i);

  if (validIndex(a, i) && validPortion(a, i, n)) {
    if (isNeg) {
      // get the length and subtract i and n to get the start point, subtract i from length to get end
      return a.slice(a.length - i - n, a.length - i)
    }
    return a.slice(i, i + n)
  }
  
  return -1
}

const validIndex = (arr, idx) => {
  return arr[idx];
}

const validPortion = (arr, idx, p) => {
  return arr.length >= idx + p;
}

console.log(portion([1,2,3,4],1,2)) // [2,3]
console.log(portion([1,2,3,4],-1,2)) // [2,3]
console.log(portion([1],1,5))// -1
console.log(portion([1,2,3,4,5],-3,2))// [1,2]
console.log(portion([1,2,3,4,5],3,2))// [4,5]