function minimumAbsoluteDifference(arr) {
  let difference = [];
  let diffNum;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    diffNum = Math.abs(arr[i] - arr[i + 1]);
    difference.push(diffNum);
  }
  let min = Infinity;
  for (let el of difference) {
    if (el < min) {
      min = el;
    }
  }
  return min;
}

minimumAbsoluteDifference([-10, -20, 7]);
