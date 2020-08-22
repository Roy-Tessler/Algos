class BT {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const swap = tree => {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
};

const invertBT = tree => {
  const queue = [tree];

  while (queue.length) {
    const current = queue.shift();
    if (current === null) continue;
    swap(current);
    queue.push(current.left);
    queue.push(current.right);
  }
};
