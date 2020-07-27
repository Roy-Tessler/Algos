// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

var hasPathSum = function(root, sum) {
  if (!root) return false;

  const dfs = (node, num) => {
    num += node.val;
    if (!node.left && !node.right) return num === sum;

    if (node.left) {
      const check = dfs(node.left, num);
      if (check) return true;
    }
    if (node.right) {
      const check = dfs(node.right, num);
      if (check) return true;
    }
    return false;
  };
  return dfs(root, 0);
};
