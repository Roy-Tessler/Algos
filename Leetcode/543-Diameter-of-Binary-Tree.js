// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \
//       4   5
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

var diameterOfBinaryTree = function(root) {
  let result = -Infinity;

  const dfs = node => {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    const total = left + 1 + right;
    if (result < total) result = total;
    return 1 + Math.max(left, right);
  };

  dfs(root);
  return result === -Infinity ? 0 : result - 1;
};
