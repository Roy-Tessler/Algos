function sameFrequency(num, num2) {
  let numStr = num.toString();
  let numStr2 = num2.toString();

  let freq1 = {};

  for (let i = 0; i < numStr.length; i++) {
    let curr = numStr[i];
    if (!freq1[curr]) {
      freq1[curr] = 1;
    } else {
      freq1[curr] += 1;
    }
  }
  for (let i = 0; i < numStr2.length; i++) {
    let curr = numStr2[i];

    if (!freq1[curr]) {
      return false;
    } else {
      freq1[curr] -= 1;
    }
  }
  return true;
}
