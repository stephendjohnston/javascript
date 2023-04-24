"use strict";
// JS210 Small Problems > Easy 5

// Reverse It Part 1

/*
Write a function that takes a string argument and returns a new string 
containing the words from the string argument in reverse order.
*/

function reverseSentence(words) {
  return words.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''))                       // ""
console.log(reverseSentence('Hello World'))            // "World Hello"
console.log(reverseSentence('Reverse these words'))    // "words these Reverse"