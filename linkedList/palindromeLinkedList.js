const { default: Node } = require('./node')
const { default: getMid } = require('./middleOfLinkedList')
const { default: reverse } = require('./../linkedList/reverse')
const { default: log } = require('../utils/log')

const isPalindromic = (head) => {
  const mid = getMid(head)
  let headSecondHalf = reverse(mid)
  const copyHeadSecondHalf = headSecondHalf
  while (head && headSecondHalf) {
    if (head.value !== headSecondHalf.value) {
      break
    }
    head = head.next
    headSecondHalf = headSecondHalf.next
  }

  reverse(copyHeadSecondHalf)

  if (head == null || headSecondHalf == null) {
    return true
  }

  return false
}

const head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

console.log(isPalindromic(head))

head.next.next.next.next.next = new Node(2)
console.log(isPalindromic(head))

let h2 = new Node(2)
h2.next = new Node(4)
h2.next.next = new Node(4)
h2.next.next.next = new Node(2)
console.log(isPalindromic(h2))
