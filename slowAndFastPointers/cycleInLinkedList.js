/* 
Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
*/

// if all values are unique we can keep track of visited and if seen again voila!
const hasCycleHash = (head) => {
  const visitedMap = {}
  let node = head
  while (node) {
    if (node.value in visitedMap) {
      return true
    }
    visitedMap[node.value] = node.value
    node = node.next
  }
  return false

}

const hasCyclePointers = (head) => {
  let slow = head
  let fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
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
console.log(hasCyclePointers(head))
console.log(hasCycleHash(head))
head.next.next.next.next.next.next = head.next.next
console.log(hasCyclePointers(head))
console.log(hasCycleHash(head))
head.next.next.next.next.next.next = head.next.next.next
console.log(hasCyclePointers(head))
console.log(hasCycleHash(head))