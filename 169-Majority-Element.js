// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3

var majorityElement = function(nums) {
  let max = 0;
  let res = 0;
  let map = {};
  let len = nums.length;

  if (len === 1) return nums[0];

  for (let i = 0; i <= len - 1; i++) {
    let curr = nums[i];

    if (!map[curr]) {
      map[curr] = 1;
    } else {
      map[curr] += 1;
      if (map[curr] > len / 2) {
        res = curr;
        return res;
      }
      if (map[curr] > max) {
        max = map[curr];
        res = curr;
      }
    }
  }
  return res;
};
