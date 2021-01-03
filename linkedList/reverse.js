const { default: Node } = require('./node')

const reverse = (head) => {
  let current = head
  let previous = null
  while (current) {
    const nextNode = current.next
    current.next = previous
    previous = current
    current = nextNode
  }
  return previous
}

export default reverse

if (require.main === module) {
  const head = new Node(2)
  head.next = new Node(4)
  head.next.next = new Node(6)
  head.next.next.next = new Node(8)
  head.next.next.next.next = new Node(10)

  console.log('Nodes of original LinkedList are: ')
  console.log(head.inspect())
  const result = reverse(head)
  console.log('Nodes of reversed LinkedList are: ')
  console.log(result.inspect())
}

// head -> 1 -> 2 -> 3 -> 4 -> 5 -> null
// head -> 5 -> 4 -> 3 -> 2 -> 1 -> null
// 2 -> 1 -> null
// 1.next = prev
// prev = 1
// 2.next = 1
// prev = 2
