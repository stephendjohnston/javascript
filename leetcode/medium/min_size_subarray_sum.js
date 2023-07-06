/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead. 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0


Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104


Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

Anchor runner:

Where does the anchor start: index 0
Where does the runner start: index 0
When does the anchor move: When the sum of the values from anchor to runner are >= target
When does the runner move: Every iteration, except when the anchor moves
What else does the anchor do: Subtract the anchor from the current sum before it moves
What else does the runner do: Checks to see if it is outside of the bounds of the array

Example:
[2,3,1,2,4,3] -> [4, 3] -> 2
         a
           r

[2,3,1,2] === 8 >= 7 ->length 4
subtract the anchor 2 -> 6
move the anchor
*/

const minSubArrayLen = function (target, nums) {
  let anchor = 0;
  let runner = 0;
  let minSize = Infinity;
  let currentSum = nums[anchor];

  while (anchor <= runner && runner < nums.length) {
    if (currentSum >= target) {
      minSize = Math.min(minSize, runner - anchor + 1)
      currentSum -= nums[anchor];
      anchor++;
    } else {
      runner++;
      currentSum += nums[runner];
    }
  }

  return minSize === Infinity ? 0 : minSize;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // 2
console.log(minSubArrayLen(4, [1,4,4])); // 1