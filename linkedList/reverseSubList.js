const { default: Node } = require('./node')

const reverseSubList = (head, p, q) => {
  let current = head
  let previous
  let i = 0
  while (current && i < p - 1) {
    previous = current
    current = current.next
    i++
  }

  const lastNodeOfFirstPart = previous
  const lastNodeOfSubList = current
  i = 0

  console.log(previous, current)
  while (current && i < q - p + 1) {
    const next = current.next
    current.next = previous
    previous = current
    current = next
    i++
  }

  if (lastNodeOfFirstPart) {
    lastNodeOfFirstPart.next = previous
  } else {
    head = previous
  }

  lastNodeOfSubList.next = current

  return head
}

if (require.main === module) {
  const head = new Node(2)
  head.next = new Node(4)
  head.next.next = new Node(6)
  head.next.next.next = new Node(8)
  head.next.next.next.next = new Node(10)

  console.log('Nodes of original LinkedList are: ')
  console.log(head.inspect())
  const result = reverseSubList(head, 2, 4)
  console.log('Nodes of reversed LinkedList are: ')
  console.log(result.inspect())
}
