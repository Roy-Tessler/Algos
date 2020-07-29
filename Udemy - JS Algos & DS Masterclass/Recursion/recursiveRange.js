// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(x) {
  if (x === 1) return 1;

  return x + recursiveRange(x - 1);
}
