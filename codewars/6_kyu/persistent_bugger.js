/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

inputs: number
output: number

Rules:
- input will be positive integer
- return multiplicative persistence: the number of times you multiply the digits in the input num until you reach a single digit.
- if the input is already a single digit, then return 0

Examples:
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

Mental Model:
Use a while loop to loop as long as the number has more than one digit. On each loop, we multiply the digits together and check that number.

Algorithm:
- convert number to string
- initialize counter to 0
- create while loop that loops while the string has a length greater than 1
  - on each loop, split the string num into array of digits and get product sum of the digits
  - convert back to a string
  - increment counter by 1
- return counter
*/

function persistence(num) {
  let counter = 0;
  let strNum = num.toString();

  while (strNum.length > 1) {
    let productSum = strNum.split('').reduce((sum, n) => sum * +n, 1);
    strNum = productSum.toString();
    counter++;
  }

  return counter;
}


console.log(persistence(39)); // 3
console.log(persistence(4)); // 0
console.log(persistence(25)); // 2
console.log(persistence(999)); // 4