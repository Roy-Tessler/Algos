// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

var climbStairs = function(n, count = {}) {
  if (count[n]) return count[n];
  if (n <= 2) return n;

  let counter = climbStairs(n - 1, count) + climbStairs(n - 2, count);
  count[n] = counter;
  return counter;
};
