console.clear()

const levelOrderTraversal = (root) => {
  const result = []
  const queue = [root]

  while (queue.length) {
    const levelSize = queue.length
    const currentLevel = []
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()
      currentLevel.push(currentNode.value)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    result.push(currentLevel)
  }

  return result
}

class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(levelOrderTraversal(root))
