"use strict";

/*
For a given nonempty string s find a minimum substring t and the 
maximum number k, such that the entire string s is equal to t 
repeated k times.

The input string consists of lowercase latin letters.

Your function should return : an array [t, k]

input: string
output: array

Rules:
- if string is empty, return empty array
- find the smallest possible substring that is repeated
  - if there is no repeated pattern in the string, then return that
  string and 1 as the values of the array
  - if there is a repeated pattern, count the number of times the pattern
  occurs and return the count and the pattern as the array values

examples:
s = 'ababab'
pattern = 'ab'
repeats = 3
return ['ab', 3];

sliced = 'ab' 
next = s.slice(2, 2 + sliced.length)

s = 'abcde'
pattern = 'abcde'
repeats = 1
return ['abcde', 1]

s = ''
return []

s = 'aaaa'
pattern = 'a'
repeats = 4
return ['a', 4]

mental model:
find the smallest pattern in the string, then count the number of times
that pattern occurs. Return the pattern and the account as values
in an array.

Finding the smallest substring:
starting with the first character in the string, which would be the 
smallest pattern possible, check if this letter is the same as every
other letter

for two letters, check if the first two letters repeat every two characters
for three letters, check if they repeat every three characters
*/

function f(s) {
  const substrings = [];

  for (let i = 0; i < s.length / 2; i += 1) {
    substrings.push(s.slice(0, i + 1));
  }

  let pattern = s;
  let count;

  substrings.some((str, idx) => {
    count = 0;

    for (let i = 0; i < s.length; i += str.length) {
      let substr = s.slice(i, i + str.length);
      if (substr !== str) {
        return false;
      }

      count += 1;
    }

    pattern = str;
    return true;
  });

  return [pattern, count];
}

console.log(f("ababab")); // ["ab", 3]
console.log(f("abcde")); // ["abcde", 1]
console.log(f("aaaaa")); // ["a", 5]
console.log(f("aabaab")); // ["aab", 2];