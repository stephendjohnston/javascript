/*
The Hashtag Generator
---------------------

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

input: string
output: string or boolean

Rules:
- The input will be a string of words or empty string
- the words in the string can be separated by 1 space or more. 
  - spaces can start the string
- if the string is empty or has more than 140 characters, return false
  - spaces don't count as characters
- return a string that starts with # and has all the words joined with no spaces
  - Each word in the string must have their first letter capitalized

Examples:
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

Mental Model:
Conditional to check the length of the string. If its greater than 140 or is only spaces, or is empty 
return false. Split the string on one or more spaces. Iterate over the string and capitalize the 
first letter of each word. Join the string with no spaces and add # to the beginning of the string.

Algorithm:
- if string length >= 140, return false
- if string length === 0 return false
- split the string on 1 or more spaces to get an array of words
- iterate over the array of words
  - on each iteration, capitalize the first letter of each word
- join the string with ('')
- return # + string
*/

function generateHashtag (str) {
  let len = str.replace(/[ ]/g, '').length;
  if (len === 0 || len >= 140) return false;

  return '#' + str
    .replace(/ {2,}/g, ' ')
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('')
}

console.log(generateHashtag("")); // false, "Expected an empty string to return false"
console.log(generateHashtag(" ".repeat(200))); // false, "Still an empty string
console.log(generateHashtag("Do We have A Hashtag")); // "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning."
console.log(generateHashtag("Codewars")); // "#Codewars", "Should handle a single word."
console.log(generateHashtag("Codewars Is Nice")); // "#CodewarsIsNice", "Should remove spaces."
console.log(generateHashtag("Codewars is nice")); // "#CodewarsIsNice", "Should capitalize first letters of words."
console.log(generateHashtag("code" + " ".repeat(140) + "wars")); // "#CodeWars"
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")); // false, "Should return false if the final word is longer than 140 chars."
console.log(generateHashtag("a".repeat(139))); // "#A" + "a".repeat(138) "Should work"
console.log(generateHashtag("a".repeat(140))); // false, "Too long"