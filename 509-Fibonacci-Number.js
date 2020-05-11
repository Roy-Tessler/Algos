// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

// Example 1:

// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

var fib = function(N) {
  if (N === 0) return 0;
  if (N < 3) return 1;

  return fib(N - 1) + fib(N - 2);
};

var fib2 = function(n, memo = [undefined, 1, 1]) {
  if (n === 0) return 0;
  if (memo[n] !== undefined) return memo[n];
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
};
