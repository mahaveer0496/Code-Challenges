const zigzagTraversal = (root) => {
  let level = 0
  const q = [root]
  const result = []
  while (q.length) {
    const levelSize = q.length
    const currentLevel = []
    level++

    for (let i = 0; i < levelSize; i++) {
      const currentNode = q.shift()
      if (level % 2 == 0) {
        currentLevel.push(currentNode.value)
      } else {
        currentLevel.unshift(currentNode.value)
      }

      currentNode.left && q.push(currentNode.left)
      currentNode.right && q.push(currentNode.right)
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

console.log(zigzagTraversal(root))
