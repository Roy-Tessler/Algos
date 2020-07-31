class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // Create a new Node with the value passed
    let newNode = new Node(val);

    // If there's no head, set the head and tail to be the newly created node.
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      // Otherwise, set the next on the tail to be the new node and set the tail to be the newly created node.
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // Increment length by 1

    this.length++;
    // Return the list (this)

    return this;
  }
  pop() {
    // If the list is empty, return undefined
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    //Loop through the list until you reach the tail
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    //Set the tail to be the second to last node
    this.tail = newTail;
    //Set the next property on the second to last node to null
    this.tail.next = null;
    //Decrement length by 1
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    //Return the value of the node removed
    return current;
  }
  shift() {
    // If there are no nodes, return undefined
    if (!this.head) return undefined;

    // Store the current head as a variable
    let currentHead = this.head;

    //Set the head property to be the current head's next property
    this.head = currentHead.next;
    //Decrement length
    this.length--;
    //Return the value of the node removed
    return currentHead;
  }
  unshift(val) {
    //Create a new node with the val passed
    let newNode = new Node(val);

    // If there's no head, set the head and tail to be the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      //Otherwise, set the new node's next to be the current head
    } else {
      newNode.next = this.head;

      // Set the head property on the list to be the new node
      this.head = newNode;
    }
    //Increment length and return the list
    this.length++;
    return this;
  }
  get(index) {
    //Edge Case - If the index is less than zero or greater than/equal to the length, return null
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;

    //Loop through until you reach the index and return the node
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(val, index) {
    //Use the get method to find the specific node
    let foundNode = this.get(index);
    // If the node is found, set the value of that node to be the value passed and return true
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    // If the node isn't found return false
    return false;
  }
  insert(index, val) {
    //Edge Case - If the index is less than zero or greater than/equal to the length, return null
    if (index < 0 || index > this.length) return null;
    // if the index is equal to the length push a new node to the end of the list
    if (index === this.length) return !!this.push(val);
    // if the index is equal to zero, unshift a node from the start of the list
    if (index === 0) return !!this.unshift(val);
    // Otherwise, using the get method, access the node at index-1
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    //Set next on that node to be the newNode
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    //Increment length and return true
    this.length++;
    return true;
  }
  remove(index) {
    //Edge Case - If the index is less than zero or greater than/equal to the length, return null
    if (index < 0 || index > this.length) return null;
    // If the index is equal to the length-1, use the pop method
    if (index === this.length - 1) return this.pop();
    // If the index is equal to zero, use shift method
    if (index === 0) return this.shift();
    // Otherwise, using the get method, access the node at index-1
    let prev = this.get(index - 1);
    // Set the next on that node to be the next of the next node
    let removed = prev.next;
    prev.next = removed.next;

    // Decrement length and return the node removed
    this.length--;
    return removed;
  }
  reverse() {
    //Swap the head and the tail
    this.head = this.tail;
    this.tail = node;
    //Create variables called next and prev
    let next;
    let prev = null;
    //Create a variable node and initialize it to the head
    let node = this.head;
    //Loop through the list
    for (let i = 0; i < this.length; i++) {
      //Set the next property to be the next on whatever node
      next = node.next;
      //Set prev to be the value of the node
      prev = node;
      //Set the node to be the value of the next
      node = next;
    }
    return this;
  }
}
