/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

inputs: array of strings
outputs: array of arrays

Rules:
- take an array of strings and return an array of arrays, where
each nested array contains matching anagrams.
  - eg. nat and tan are grouped in a nested array while
  ate and tea are grouped in another array
- an array of empty strings returns array of one array with
empty string
- array of length 1, returns array of 1 array.
- strings are all lowercase chars
- you can return answer in any order

Examples:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Sort the input array strings: ["aet", "aet", "ant", "aet", "ant", "abt"]
how to collect like strings into array
create an array that will hold the values already used. This way we wont recollect the
same strings
so for 'aet' we can push into an array of usedStrs = ['aet]
after we have iterated and collected them



*/

const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let tArr = t.split('');

  for (let i = 0; i < s.length; i++) {        
      let idx = tArr.indexOf(s[i]);
      
      if (idx === -1) {
          return false
      }

      tArr.splice(idx, 1);
  }
  return true;
};

const groupAnagrams = function(strs) {
  const result = [];
  const usedStrs = [];

  for (let i = 0; i < strs.length; i++) {
    let currentStr = strs[i];
    let matches = [currentStr];
    if (usedStrs.includes(currentStr.split('').sort().join(''))) {
      continue;
    }

    for (let j = i + 1; j < strs.length; j++) {
      if (isAnagram(currentStr, strs[j])) {
        matches.push(strs[j]);
      }
    }

    usedStrs.push(currentStr.split('').sort().join(''));
    result.push(matches);
  }

  return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))