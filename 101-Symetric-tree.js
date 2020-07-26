// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

var isSymmetric = function(root) {
  const isLayerSymmetric = nodes => {
    if (!nodes.length) return true;
    const childs = [];
    for (let i = 0; i < nodes.length / 2; i += 1) {
      const node = nodes[i];
      const symmetricNode = nodes[nodes.length - 1 - i];
      if (node && symmetricNode) {
        if (node.val !== symmetricNode.val) return false;
        childs[i * 2] = node.left;
        childs[i * 2 + 1] = node.right;
        childs[nodes.length * 2 - 1 - i * 2] = symmetricNode.right;
        childs[nodes.length * 2 - 2 - i * 2] = symmetricNode.left;
      } else if (!node && !symmetricNode) {
        continue;
      } else {
        return false;
      }
    }
    return isLayerSymmetric(childs.filter(item => item !== undefined));
  };
  if (!root) return true;
  return isLayerSymmetric([root.left, root.right]);
};
