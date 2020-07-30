// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

var MinStack = function() {
  this.min = null;
  this.stack = [];
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.min === null || x < this.min) this.min = x;
};

MinStack.prototype.pop = function() {
  const num = this.stack.pop();
  if (num === this.min) {
    this.min = null;
    this.min = this.getMin();
  }
  return num;
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  if (this.min !== null) return this.min;

  for (let i = 0; i < this.stack.length; i += 1) {
    const num = this.stack[i];
    if (this.min === null || num < this.min) this.min = num;
  }
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
