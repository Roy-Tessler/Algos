function isValidSubsequence(array, sequence) {
  for (let el of array) {
    if (el === sequence[0]) {
      sequence.shift();
    }
    if (sequence.length === 0) return true;
  }
  return false;
}
