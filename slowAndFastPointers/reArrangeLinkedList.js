/* 
Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

Your algorithm should not use any extra space and the input LinkedList should be modified in-place.
*/

const rearrange = (head) => {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let headSecondHalf = reverse(slow)
  let headFirstHalf = head

  while (headFirstHalf && headSecondHalf) {
    let temp = headFirstHalf.next
    headFirstHalf.next = headSecondHalf
    headFirstHalf = temp

    temp = headSecondHalf.next
    headSecondHalf.next = headFirstHalf
    headSecondHalf = temp
  }

  if (headFirstHalf) {
    headFirstHalf.next = null
  }

  return head
}

function reverse(head) {
  let prev = null
  let node = head

  while (node) {
    const next = node.next
    node.next = prev
    prev = node
    node = next
  }

  return prev
}

class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

const head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)

console.log(rearrange(head))
