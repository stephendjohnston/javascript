"use strict";
// JS210 Small Problems > Easy 5

// Reverse It Part 2

/*
Write a function that takes a string argument containing one or more words 
and returns a new string containing the words from the string argument. 
All five-or-more letter words should have their letters in reverse order. 
The string argument will consist of only letters and spaces. Words will be 
separated by a single space.
*/

function reverseWords(words) {
  return words.split(' ').map(reverseBigWords).join(' ');
}

function reverseBigWords(word) {
  if (word.length < 5) return word;
  return reverseWord(word);
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

// LS Solution

function reverseWords(string) {
  const words = string.split(' ');
  const reversedWords = [];

  for (let i = 0; i < words.length; i += 1) {
    let currentWord = words[i];
    if (currentWord.length >= 5) {
      reversedWords.push(currentWord.split('').reverse().join(''));
    } else {
      reversedWords.push(currentWord);
    }
  }

  return reversedWords.join(' ');
}

console.log(reverseWords('Professional'))             // "lanoisseforP"
console.log(reverseWords('Walk around the block'))    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'))            // "hcnuaL loohcS"