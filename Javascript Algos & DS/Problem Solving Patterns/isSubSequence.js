function isSubsequence(str, str2) {
  let strIdx = 0;
  let str2Idx = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str[strIdx] === str2[str2Idx]) {
      strIdx++;
      str2Idx++;
    } else {
      str2Idx++;
    }
    if (strIdx === str.length - 1) return true;
  }
  return false;
}

// Recursive Solution //
function isSubsequence2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
