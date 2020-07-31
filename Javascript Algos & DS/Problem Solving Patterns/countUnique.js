function countUniqueValues(arr) {
  let j = 0;
  if (arr.length < 2) {
    return arr.length;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[j]) {
      i++;
    }
    if (arr[i] > arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }

  return j + 1;
}
