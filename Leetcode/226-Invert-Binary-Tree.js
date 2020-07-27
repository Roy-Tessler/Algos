// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

var invertTree = function(root) {
  if (!root) return root;

  let { left, right } = root;

  if (left) {
    left = invertTree(left);
  }

  if (right) {
    right = invertTree(right);
  }

  root.left = right;
  root.right = left;

  return root;
};
