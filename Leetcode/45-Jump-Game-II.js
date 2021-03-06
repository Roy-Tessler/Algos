// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// Example:

// Input: [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
//     Jump 1 step from index 0 to 1, then 3 steps to the last index.

var jump = function(nums) {
  let maxReach = nums[0];
  let steps = nums[0];
  let jumps = 0;

  if (nums.length === 1) return 0;

  for (let i = 1; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, nums[i] + i);
    steps--;

    if (steps === 0) {
      jumps++;
      steps = maxReach - i;
    }
  }
  return jumps + 1;
};
