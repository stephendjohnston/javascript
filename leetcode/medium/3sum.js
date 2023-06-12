/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

input: array of nums
output: array of arrays

Rules:
- return an array of arrays where each sub array will have three numbers that sum to 0
  - the same element can't be used twice
- there can be no duplicate sub arrays
- the order does not matter; don't need to preserve index
  - **notice how input array is not sorted, but output arrays are sorted
- if no triplets, return []
- assume valid inputs

Examples:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Data Structures:
input: array of nums
output: array of arrays
Data manipulation
arrays, int's

Algo:
- sort the input array, ascdending (lowest to highest)
- Input: nums = [-1,0,1,2,-1,-4] -> [-4, -1, -1, 0, 1, 2]
                  st                      s   m        e
  - for loop until s < length - 2
    - s, m, and e pointers
    - m = s + 1
    - e always starts at last index
      - reset m and e after each iteration
    - first iteration: s is at 0, m is at s + 1, e is at last index
      - while m < e
        - check if the values at s, m, and e are === 0
          - if equal to 0, is a triplet -> push into result array
            - break
          - if less than 0, we have to increment m
          - if greater than 0, decrement e

          last 


[-4, -1, -1, 1, 1, 2, 9, 30]
          s     m  e

[[-1, -1, 2], [-1, 0, 1]]

*/

const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  let usedVals = {};

  for (let s = 0; s < nums.length - 2; s += 1) {
    let m = s + 1;
    let e = nums.length - 1;

    while (m < e) {
      let sum = nums[s] + nums[m] + nums[e];

      if (sum === 0 && !usedVals[`${nums[s]}${nums[m]}${nums[e]}`]) {
        result.push([nums[s], nums[m], nums[e]]);
        usedVals[`${nums[s]}${nums[m]}${nums[e]}`] = true;
        m++;
      } else if (sum < 0) {
        m++;
      } else {
        e--;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2,0,2],[-2,1,1]]
