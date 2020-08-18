function isMonotonic(array) {
  let inc = true;
  let dec = true;
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let prev = array[i - 1];
    if (current < prev) inc = false;
    if (current > prev) dec = false;
  }
  return dec || inc;
}
