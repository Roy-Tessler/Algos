function solution(T) {
  // write your code in JavaScript (Node.js 8.9.4)
  let isPerfect;

  let height;

  function findPerfectTree(node) {
    if (node == null) {
      isPerfect = true;
      height = 0;
      return height;
    }
    let left = {
      isPerfect: false,
      height: 0
    };
    let right = {
      isPerfect: false,
      height: 0
    };
    if (node.left) {
      left = findPerfectTree(node.left);
    }
    if (node.right) {
      right = findPerfectTree(node.right);
    }
    if (left.isPerfect && right.isPerfect && left.height == right.height) {
      height = left.height + 1;
      isPerfect = true;
      return height;
    }

    isPerfect = false;
    height = Math.max(left.height, right.height);

    return height;
  }
  findPerfectTree(T);
}
