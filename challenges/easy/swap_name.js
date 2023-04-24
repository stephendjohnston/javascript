"use strict";
// JS210 Small Problems > Easy 5

// Swap Name

/*
Write a function that takes a string argument consisting of a first name, 
a space, and a last name, and returns a new string consisting of the last 
name, a comma, a space, and the first name.
*/

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Further Exploration
/*
What if the person had more than one first name? Refactor the current 
solution so that it can accommodate this.
*/

function swapName(name) {
  let nameArr = name.split(' ');

  return `${nameArr[nameArr.length - 1]}, ${nameArr.slice(0, -1).join(' ')}`;
}

console.log(swapName('Joe Martin Roberts')) // "Roberts, Joe Martin"