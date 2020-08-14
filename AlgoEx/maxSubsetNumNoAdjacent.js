function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  let next = array[0];
  let curr = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    let current = Math.max(curr, next + array[i]);
    next = curr;
    curr = current;
  }
  return curr;
}
