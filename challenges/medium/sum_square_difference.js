"use strict";

function getSquaredSum(digits) {
  return digits.reduce((sum, n) => sum + n, 0)**2;
}

function getSumSquared(digits) {
  return digits.reduce((sum, n) => sum += (n**2));
}

function sumSquareDifference(n) {
  let digits = Array(n).fill().map((_, indx) => indx + 1);

  let difference = getSquaredSum(digits) - getSumSquared(digits);
  return difference;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150