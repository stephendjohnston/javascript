/*
Stop gninnipS My sdroW!
-----------------------

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

inputs: string
output: string

Rules:
- input is string of one or more words
- input consists of only letters and spaces
- spaces are only included when more than one word is present
- only words that have 5 letters or more are reversed
- return value is the same string as the input

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

Mental Model:
Split the string into array of strings. Iterate over the array. On each iteration, check the length of the current string. If the current string is length 5 or greater, reverse that string.

Algorithm:
- split the input string on spaces into array of strings
- map over array of strings
  - if length of current word >= 5 then reverse string with reverse()
- join the array of words into string
*/

const spinWords = str => {
  return str.split(' ').map(word => {
    if (word.length >= 5) {
      word = word.split('').reverse().join('');
    }
    return word;
  }).join(' ');
}

console.log(spinWords("Hey fellow warriors")); // => returns "Hey wollef sroirraw" 
console.log(spinWords("This is a test")); // => returns "This is a test" 
console.log(spinWords("This is another test")); // => returns "This is rehtona test"