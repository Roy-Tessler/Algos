// Given a string s consisting only of characters a, b and c.

// Return the number of substrings containing at least one occurrence of all these characters a, b and c.

// Example 1:

// Input: s = "abcabc"
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).
// Example 2:

// Input: s = "aaacb"
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".

var numberOfSubstrings = function(s) {
  const letterCount = { a: 0, b: 0, c: 0 };
  let res = 0;

  for (let i = 0, j = 0; i < s.length; i++) {
    let curr = s[i];
    letterCount[curr]++;

    while (
      j < s.length &&
      letterCount["a"] > 0 &&
      letterCount["b"] > 0 &&
      letterCount["c"] > 0
    ) {
      letterCount[s[j]]--;
      j++;
    }

    res += j;
  }
  return res;
};
