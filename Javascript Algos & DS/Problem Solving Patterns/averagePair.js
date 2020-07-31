function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if ((arr[left] + arr[right]) / 2 > target) {
      right--;
    } else if ((arr[left] + arr[right]) / 2 < target) {
      left++;
    } else {
      return true;
    }
  }
  return false;
}
