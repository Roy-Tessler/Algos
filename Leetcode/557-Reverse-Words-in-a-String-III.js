// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

var reverseWords = function(s) {
  let sArray = s.split(" "),
    result = "";
  for (var i = 0; i < sArray.length; i++) {
    let cStr = sArray[i];
    let pointer = 0;
    while (pointer < cStr.length) {
      result += cStr[cStr.length - 1 - pointer];
      pointer++;
    }

    if (i < sArray.length - 1) {
      result += " ";
    }
  }
  return result;
};
