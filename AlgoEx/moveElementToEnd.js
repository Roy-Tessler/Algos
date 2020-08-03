const moveElementToEnd = (array, toMove) => {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    while (start < end && array[end] === toMove) end--;
    if (array[start] === toMove) swap(start, end, array);
    start++;
  }
  return array;
};
const swap = (start, end, array) => {
  let temp = array[end];
  array[end] = array[start];
  array[start] = temp;
};
