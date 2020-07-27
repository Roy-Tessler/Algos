// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

// Example 1:

// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

var shortestToChar = function(S, C) {
  let res = [];
  let idx = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      idx.push(i);
    }
  }
  for (let i = 0; i < S.length; i++) {
    let temp = Infinity;

    for (let id of idx) {
      temp = Math.abs(temp);
      let distance = Math.abs(id - i);
      let min = Math.min(temp, distance);
      temp = min;
    }
    res.push(temp);
  }
  return res;
};
