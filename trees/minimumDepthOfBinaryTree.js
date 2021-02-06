const getMinimumDepth = (root) => {
  const q = [root]
  let depth = 0
  while (q.length) {
    const levelSize = q.length
    depth++
    for (let i = 0; i < levelSize; i++) {
      const currentNode = q.shift()

      if (currentNode.left == null && currentNode.right == null) {
        return depth
      }

      currentNode.left && q.push(currentNode.left)
      currentNode.right && q.push(currentNode.right)
    }
  }
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

console.log(getMinimumDepth(root))
