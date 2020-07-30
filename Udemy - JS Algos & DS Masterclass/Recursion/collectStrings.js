function collectStrings(obj) {
  let res = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      res.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      res = res.concat(collectStrings(obj[key]));
    }
  }
  return res;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

collectStrings(obj); // ["foo", "bar", "baz"])
