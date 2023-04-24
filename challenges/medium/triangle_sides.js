"use strict";

/*
input: Three Numbers - sides of a triangle
output: String - type of triangle represented by input numbers - 4 possible options

Rules:
- The input will be three separate Numbers
- The inputs will be integers
- for a valid triangle, the sum of the two smallest inputs must be greater than the third input
- every side must be greater than 0
- possible outputs: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

Mental Modal:
Validate the inputs. If inputs are invalid, return "invalid".

Algorithm:
- if any of the inputs are:
  -> 0
  -> two of the inputs are less than the third input
    -> return 'invalid'
- if all inputs are equal return 'equilateral'
- if all inputs are different return 'scalene'
- if two of three inputs are equal return 'isoceles'
*/

function invalid(sides) {
  return sides.some(side => side === 0) || sides[0] + sides[1] <= sides[2];
}

function triangle(...sides) {
  let sidesSorted = Array.from(sides).sort((a, b) => a - b);
  if (invalid(sidesSorted)) return 'invalid';

  if (sidesSorted[0] === sidesSorted[1] && sidesSorted[0] === sidesSorted[2]) {
    return 'equilateral';
  } else if (sidesSorted[0] === sidesSorted[1] || sidesSorted[0] === sidesSorted[2] || sidesSorted[1] === sidesSorted[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"