/* 
Given the head of a LinkedList with a cycle, find the length of the cycle.
*/

const findLengthOfCycle = (head) => {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) {
      return getLength(slow)
    }
  }
}

function getLength(node) {
  let start = node.next
  let length = 1
  while (start !== node) {
    start = start.next
    length++
  }
  return length
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(findLengthOfCycle(head));

head.next.next.next.next.next.next = head.next.next.next;
console.log(findLengthOfCycle(head));