// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

var balancedStringSplit = function(s) {
  let checker = {
    R: 0,
    L: 0
  };
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    checker[current] += 1;
    if (checker["L"] === checker["R"]) {
      counter++;
      checker = {
        R: 0,
        L: 0
      };
    }
  }
  return counter;
};
