/*
Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
*/

const getStartOfCycle = (head) => {
  let fast = head
  let slow = head
  let lengthOfCycle = 0
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) {
      lengthOfCycle = getLength(slow)
      break
    }
  }

  return getStart(head, lengthOfCycle)
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

function getStart(node, lengthOfCycle) {
  let slow = node
  let fast = node

  while (lengthOfCycle > 0) {
    fast = fast.next
    lengthOfCycle--
  }

  while (fast != slow) {
    fast = fast.next
    slow = slow.next
  }

  return slow
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(getStartOfCycle(head))

head.next.next.next.next.next.next = head.next.next.next
console.log(getStartOfCycle(head))

head.next.next.next.next.next.next = head;
console.log(getStartOfCycle(head))
