// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

var reverseList = function(head) {
  var temp = null;
  var next = null;

  while (head !== null) {
    temp = new ListNode(head.val);
    temp.next = next;
    next = temp;
    head = head.next;
  }
  return temp;
};
