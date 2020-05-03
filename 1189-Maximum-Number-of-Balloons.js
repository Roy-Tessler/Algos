// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1
// Example 2:

// Input: text = "loonbalxballpoon"
// Output: 2

var maxNumberOfBalloons = function(text) {
  let balloon = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0
  };
  let result = 0;
  for (let i = 0; i < text.length; i++) {
    let current = text[i];
    if (typeof balloon[current] === "number") {
      balloon[current] += 1;
    }
    if (
      balloon["b"] >= 1 &&
      balloon["a"] >= 1 &&
      balloon["l"] >= 2 &&
      balloon["o"] >= 2 &&
      balloon["n"] >= 1
    ) {
      result++;
      balloon["b"]--;
      balloon["a"]--;
      balloon["l"] -= 2;
      balloon["o"] -= 2;
      balloon["n"]--;
    }
  }
  return result;
};
