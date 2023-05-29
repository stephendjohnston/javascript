/*
First non-repeating Character

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

input: string
output: string

Rules:
- input is a string of chars
  - if input is empty or only contains the same repeating char, return ''
- for one letter strings, just return that char
- return the first char in the string that does not appear anywhere else in the string
- lowercase and uppercase chars should be treated equal
  - T is the same as t
- must return the correct case of the letter that appears in the input string


Examples:
console.log(firstNonRepeatingLetter('a')); // 'a'
console.log(firstNonRepeatingLetter('stress')); // 't'
console.log(firstNonRepeatingLetter('moonmen')); // 'e'

Mental Model:
Make a copy of the string that only has lowercase chars. Iterate over the chars. On each iteration, check if the current char exists in the rest of the string after the current char. So if 's' is the first char, we want to check if 's' exists at index of the string from index 1 to the end of the string. If the current char does not exist in the rest of the string, use the index at the current char to return the char at the index of the input string. This is to ensure we get the correct case of the string.

Algorithm:
- initialize copy of input string of lowercase chars
- initialize array to keep track of past chars
- use for loop to iterate over the chars
  - on each loop, check the indexOf(currentChar) of the string from index of currentChar + 1
  - if the it returns -1 then this is the char that does not repeat
  - also check that the current char was not already previously used

- return ''
*/

function firstNonRepeatingLetter(s) {
  let lowercaseCopy = s.toLowerCase();
  let charList = [];

  for (let i = 0; i < s.length; i++) {
    let currentChar = lowercaseCopy[i];
    let charRepeatIdx = lowercaseCopy.indexOf(currentChar, i + 1);

    if (charRepeatIdx === -1 && !charList.includes(currentChar)) {
      return s[i];
    }

    charList.push(currentChar);
  }

  return '';
}

console.log(firstNonRepeatingLetter('a')); // 'a'
console.log(firstNonRepeatingLetter('stress')); // 't'
console.log(firstNonRepeatingLetter('moonmen')); // 'e'