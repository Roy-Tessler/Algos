function areThereDuplicates(arg, arg2, arg3) {
  let argu = [...arguments];
  let freq = {};
  for (let el of argu) {
    if (!freq[el]) {
      freq[el] = true;
    } else {
      return true;
    }
  }
  return false;
}

// One liner //

function areThereDuplicates2() {
  return new Set(arguments).size !== arguments.length;
}
