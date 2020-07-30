const { default: Node } = require('./node')
const { default: getMid } = require('./middleOfLinkedList')
const { default: reverse } = require('../linkedList/reverse')
const { default: log } = require('../utils/log')

const reorder = (head) => {
  const mid = getMid(head)

  let headSecondHalf = reverse(mid)
  let headFirstHalf = head

  while (headFirstHalf && headSecondHalf) {
    const temp1 = headFirstHalf.next
    const temp2 = headSecondHalf.next

    headFirstHalf.next = headSecondHalf
    headFirstHalf = temp1

    headSecondHalf.next = temp1
    headSecondHalf = temp2
  }
  if (headFirstHalf !== null) {
    headFirstHalf.next = null
  }
  log(head)
}

const head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
head.next.next.next.next.next = new Node(12)
reorder(head)
