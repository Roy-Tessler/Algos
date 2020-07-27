var decodeString = function(s) {
  let res = [];
  let final = "";
  let temp = "";

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];

    if (curr > 0) {
      curr = Number(curr);
      for (let j = i + 2; j < s.length; j++) {
        let char = s[j];
        if (char === "]") break;
        temp += char;
      }
      for (let i = 0; i < curr; i++) {
        if (!res[i]) {
          res[i] = temp;
        } else {
          res[i] += temp;
        }
      }
    }
    temp = "";
    let el = res.join("");
    final += el;
    res = [];
  }
  return final;
};
