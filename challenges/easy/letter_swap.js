// JS210 - Small Problems > Easy 3


// Letter Swap
// -----------
/*
Given a string of words separated by spaces, write a function that swaps the 
first and last letters of every word.

You may assume that every word contains at least one letter, and that the string 
will always contain at least one word. You may also assume that each string contains 
nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

Examples:

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
*/

function swap(text) {
  const stringArray = text.split(' ');

  let result = stringArray.map(function(word) {
    if (word.length === 1) return word;
    return word[word.length - 1] + word.slice(1, -1) + word[0];
  });

  console.log(result.join(' '));
  return result.join(' ');
;}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"


// LS Solution:

function swap(words) {
  const wordsArray = words.split(' ');

  for (let i = 0; i < wordsArray.length; i += 1) {
    wordsArray[i] = swapFirstLastCharacters(wordsArray[i]);
  }

  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

// Student Solution with regex:

function swap(sentence) {
  return sentence.replace(/\b(\w)(\w*)(\w)\b/g, '$3$2$1');
}