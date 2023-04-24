"use strict";

/*
inputs: number
output: number
- featured number: odd number that is a multiple of 7 with all of its digits occurring exactly once each

Rules:
- inputs will be valid numbers
- highest possible featured number is 9876543210
  - if the input is higher than this number, return string with message
- featured number must satisfy these three conditions:
  1. odd number
  2. multiple of 7
  3. all digits occur exactly once each

Mental Model:
check if input is greater than highest possible featured number.
Create a while loop starting at the input number and increment by 1 until it hits a multiple of 7.
Create a second while loop starting at the new number which a multiple of 7 and increment by 7 until the 
number has all digits only occurring once. 

How to get unique digits from a Number?
- convert number to string
- split string
- get length
- create empty array
- iterate over string array
  - if empty array contains current number return false
  - else push number to empty array
- return true

*/

function hasUniqueDigits(n) {
  let arr = [];
  let strArr = String(n).split('');
  
  for (let i = 0; i < strArr.length; i++) {
    if (arr.includes(strArr[i])) return false;
    arr.push(strArr[i]);
  }

  return true;
}

function featured(number) {
  const MAX_FEATURED = 9876543201;
  if (number >= MAX_FEATURED) {
    console.log('NOT POSSIBLE');
    return;
  }

  do {
    number += 1;
  } while (number % 7 !== 0)

  while (number % 2 === 0 || !hasUniqueDigits(number)) {
    number += 7
  }

  console.log(number);
  return number;
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."