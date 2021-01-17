function isPalindromicLinkedList(head) {
  if (head === null || head.next === null) return true

  // find middle of the LinkedList
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  // reverse the second half
  let headSecondHalf = reverse(slow)
  // store the head of reversed part to revert back later
  let copyHeadSecondHalf = headSecondHalf

  // compare the first and the second half
  while (head && headSecondHalf) {
    if (head.value !== headSecondHalf.value) break // not a palindrome

    head = head.next
    headSecondHalf = headSecondHalf.next
  }

  reverse(copyHeadSecondHalf) // revert the reverse of the second half

  if (head === null || headSecondHalf === null) return true

  return false
}

class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

function reverse(head) {
  let prev = null
  while (head !== null) {
    const next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}

const head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(isPalindromicLinkedList(head))

head.next.next.next.next.next = new Node(2)
// console.log(isPalindromicLinkedList(head));
