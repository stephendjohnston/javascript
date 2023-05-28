/*
Sum of Digits / Digital Root
----------------------------

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Inputs: integer
Outputs: integer

Rules:
- input will be positive integer
- reduce the input until it is a single digit number
  - reduce by adding the sum of the digits
- output will be a single digit number

Examples:
digitalRoot(16), 7
digitalRoot(456), 6

Mental Model:
Convert the input num into a string. Create a while loop that runs until the string num length === 1.
On each loop, split the string into array, convert each str digit into a number and add them together.
Convert the number back into a string. Continue until string length === 1

Algorithm:
- convert number to string
- create while loop on condition that string num breaks when it's length === 1
  - on each loop, split string into array of string digits
    - map over array and convert to numbers
    - reduce the array into a number
    - convert back to string
- convert string into number
- return number
*/

function digitalRoot(num) {
  let strNum = String(num);

  while (strNum.length > 1) {
    let digits = strNum.split('').map(s => Number(s));
    let sum = digits.reduce((total, n) => total + n, 0);
    strNum = String(sum);
  }

  return Number(strNum);
}

console.log(digitalRoot(16)); // 7
console.log(digitalRoot(456)); // 6