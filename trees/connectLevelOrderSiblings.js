// simply connect each level
const connectThem1 = (root) => {
  const q = [root]
  while (q.length) {
    const levelSize = q.length
    const currentLevel = []

    for (let i = 0; i < levelSize; i++) {
      const currentNode = q.shift()
      currentLevel.push(currentNode)
      currentNode.left && q.push(currentNode.left)
      currentNode.right && q.push(currentNode.right)
    }

    for (let i = 0; i < currentLevel.length; i++) {
      if (currentLevel[i + 1]) {
        currentLevel[i].next = currentLevel[i + 1]
      }
    }
  }

  return root
}

const connectThem2 = (root) => {
  const q = [root]
  while (q.length) {
    const levelSize = q.length
    let previousNode = null

    for (let i = 0; i < levelSize; i++) {
      const currentNode = q.shift()

      if (previousNode) {
        previousNode.next = currentNode
      }

      currentNode.left && q.push(currentNode.left)
      currentNode.right && q.push(currentNode.right)

      previousNode = currentNode
    }
  }

  return root
}

// Here instead of just connecting level siblings we need to connect them all
const connectall = (root) => {
  const q = [root]
  let previousNode = null

  while (q.length) {
    const currentNode = q.shift()

    if (previousNode) {
      previousNode.next = currentNode
    }

    previousNode = currentNode

    currentNode.left && q.push(currentNode.left)
    currentNode.right && q.push(currentNode.right)
  }

  return root
}

class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
    this.next = null
  }
  toString() {
    return JSON.stringify(this, null, 2)
  }
}

const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

connectThem2(root)

console.log(root + '')
