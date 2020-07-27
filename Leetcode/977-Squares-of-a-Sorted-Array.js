// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

var sortedSquares = function(A) {
  let res = A.map(el => el * el);

  res.sort((a, b) => a - b);

  return res;
};
