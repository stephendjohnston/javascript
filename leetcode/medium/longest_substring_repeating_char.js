/*
Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.



"a b c a b c b b"
 a     r              duplicate found at index 3, current longest substring is "abc", length 3
                      move the runner to the index of the previous duplicate + 1, e.g. index 1
                      

"a b c a b c b b"
   a   r              We then increment the runner and begin the process over again

  h will be a hash that keeps track of duplicate indexes
  a is the anchor. The anchor only moves when a duplicate is found. We know we have found a duplicate
  when h[s[r]] is not undefined and the index of the previous duplicate is >= anchor. When we find
  a duplicate, we move the anchor to the index one past the index of the previous duplicate char.
  e.g. if we find an "a" at index 0, and then find an "a" at index 3, we will move the anchor to
  the index of the first "a" + 1 aka index 1.

Algo:
- if string length === 0 return 0
- initialize hash to keep track of duplicate chars where the char is the key and the index
is the value
- initialize anchor = 0, we move the anchor when we find a duplicate char
  - the anchor will move to the index of the previous duplicate + 1
- initialize runner = 0, we move the runner on every iteration
- initialize longest = 0, this variable will be used to keep track of the longest current substring
- initialize while loop that loops while runner is less than the string length
  - get the index of the previous duplicate by checking the hash for the value at index r of string
  - if the prev value is greater than or equal to the anchor
    - move the anchor to the index of the previous duplicate + 1
  - in the hash, set the value of current letter at index of r to the current value of the runner
  - if the runner - anchor + 1 > longest
    - set the longest = runner - anchor + 1
  - increment the runner
- return longest
*/

function lengthOfLongestSubstring(s) {
  if (s.length === 0) {
    return 0;
  }

  let h = {};
  let a = 0;
  let r = 0;
  let longest = 0;
  
  while (r < s.length) {
    let prev = h[s[r]];

    if (prev !== undefined && prev >= a) {
      a = h[s[r]] + 1;
    }
    h[s[r]] = r;
    if (r - a + 1 > longest) {
      longest = r - a + 1;
    }
    r++;
  }

  return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("pwwkew")); // 3
