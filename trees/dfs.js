const dfsRecursive = (root) => {
  const result = []
  const f = (node) => {
    if (!node) return
    result.push(node.value)
    f(node.left)
    f(node.right)
  }
  f(root)
  return result
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const root = new Node(0)
root.left = new Node(1)
root.left.left = new Node(2)
root.left.right = new Node(13)
root.left.right.left = new Node(24)
root.left.right.right = new Node(12)

root.right = new Node(6)
root.right.left = new Node(7)
root.right.right = new Node(9)

console.log(dfsRecursive(root))

function findCloseValue(root, target) {
  let closestValueSoFar = Infinity

  const f = (node) => {
    if (!node) return
    if (
      Math.abs(node.value - target) < Math.abs(node.value - closestValueSoFar)
    ) {
      closestValueSoFar = node.value
    }
    f(node.left)
    f(node.right)
  }

  f(root)
  return closestValueSoFar
}

console.log(findCloseValue(root, 10))
