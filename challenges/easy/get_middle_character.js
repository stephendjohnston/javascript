"use strict";
// JS210 - Small Problems > Easy 5

// Get the Middle Character

/*
Write a function that takes a non-empty string argument and returns the 
middle character(s) of the string. If the string has an odd length, you 
should return exactly one character. If the string has an even length, you 
should return exactly two characters.
*/

function centerOf(string) {
  let middleIndex = Math.floor(string.length / 2);

  if (string.length % 2 === 1) {
    return string[middleIndex];
  } else {
    return string.slice(middleIndex - 1, middleIndex + 1);
  }
}

// LS Solution

function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2);
  }
}

console.log(centerOf('I Love JavaScript')) // "a"
console.log(centerOf('Launch School'))     // " "
console.log(centerOf('Launch'))            // "un"
console.log(centerOf('Launchschool'))      // "hs"
console.log(centerOf('x'))                 // "x"