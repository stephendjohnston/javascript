/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

input: string
output: string

Rules:
- input is a string of words separated by spaces
- for each word in the sentence, move the first letter to the end of the word and add 'ay'
- leave punctuation marks untouched

Examples:

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

Mental Model:
Split string into array of words. Iterate over the array. If the current string is alpha chars, move the first letter of string to the end and then add 'ay' to the end of that. Join the array on spaces.

Algorithm:

- split string into array on spaces
- iterate over array with map
  - check if current string is punctuation or word
  - if word, slice the string from index 1 to the end, add the first letter of the string, add 'ay'
- join array on spaces
*/

function pigIt(str){
  return str.split(' ').map(s => {
    if (s.match(/[a-z]/gi)) {
      s = s.slice(1) + s[0] + 'ay';
    }
    return s;
  }).join(' ');
}

console.log(pigIt('Pig latin is cool')); // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')); // 'hisTay siay ymay tringsay'
console.log(pigIt('Hello world !'));  // elloHay orldway !