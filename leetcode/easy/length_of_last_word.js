/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

inputs: string
outputs: number

Rules:
- return the length of the last word of the string
- input string only consists of english letters and space
- there will be at least one word in string input
- there may be multiple spaces in between words as well as before and after.

Mental Model:
- split string on one or more spaces
- get last word
- return length
*/

function lengthOfLastWord(s) {
  let trimmedString = s.trim();
  return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));