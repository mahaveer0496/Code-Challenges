/* 
Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
*/

console.clear()

const hasPath = (root, s) => {
  const f = (node, sum) => {
    if (!node) return false

    if (node.left == null && node.right == null && sum == node.value) {
      return true
    }

    return f(node.left, sum - node.value) || f(node.right, sum - node.value)
  }

  return f(root, s)
}

class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(hasPath(root, 23))
console.log(hasPath(root, 16))
