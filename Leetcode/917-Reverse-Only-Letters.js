// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

// Example 1:

// Input: "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

var reverseOnlyLetters = function(S) {
  let arr = S.split("");
  let res = [];
  let end = S.length - 1;
  let start = 0;

  while (start <= end) {
    if (!isLetter(arr[start])) {
      res[start] = arr[start];
      start++;
    }
    if (!isLetter(arr[end])) {
      res[end] = arr[end];
      end--;
    }
    if (isLetter(arr[start]) && isLetter(arr[end])) {
      res[start] = arr[end];
      res[end] = arr[start];
      start++;
      end--;
    }
  }

  if (S.length % 2 !== 0 && !isLetter(arr[start])) {
    res[start] = arr[start];
  }
  return res.join("");
};

function isLetter(char) {
  if (!char) return;
  if (char.charCodeAt() > 64 && char.charCodeAt() < 91) return true;
  if (char.charCodeAt() > 96 && char.charCodeAt() < 123) return true;
  return false;
}
