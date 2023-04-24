// JS210 - Small Problems > Easy 5


// Double Char Part 2
// ------------------

// PEDAC
// -----

/*
Problem:
--------

Return a new string that is the result of doubling every consonant character
from an input string while leaving every other character as is. 

Rules:
  Explicit
    - Return a new string
    - double consonants
    - do not double vowels or any other characters that are not consonants
  Implicit
    - empty strings return an empty string
    - do not double numbers

Algorithm:
----------

either create a string of all the consonants and and see if the the character
is included in the string of consonants or not.
OR
use a regex to determine whether a character is a consonant or not.

using regex
- declare and initialize an empty string
- use a for loop to iterate over the string argument
  - on each iteration check to see if the current character is a vowel
  or any other character that is not a consonant
    - if true then add the current character to the string
    - if false then add the current character twice to the string
- output the string

*/

function doubleConsonants(string) {
  let returnString = '';

  for (let i = 0; i < string.length; i++) {
    returnString += string[i];

    if (string[i].match(/[^aeiou\W\d]/gi)) {
      returnString += string[i];
    }
  }
  
  return returnString;
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""