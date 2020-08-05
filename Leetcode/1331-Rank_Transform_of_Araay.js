// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

// Example 1:

// Input: arr = [40,10,20,30]
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
// Example 2:

// Input: arr = [100,100,100]
// Output: [1,1,1]
// Explanation: Same elements share the same rank.

var arrayRankTransform = function(arr) {
  let start = 0;

  const dict = [...arr]
    .sort((a, b) => a - b)
    .reduce((accum, val, idx) => {
      if (!accum[val]) {
        accum[val] = idx + 1 - start;
      } else {
        start += 1;
      }
      return accum;
    }, {});
  let result = arr.map(val => dict[val]);
  return result;
};
