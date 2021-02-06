/* 
Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
*/
const getAllPaths = (root, S) => {
  const allPaths = []
  const f = (node, sum = S, currentPath = []) => {
    if (!node) return

    currentPath.push(node.value)
    if (node.left == null && node.right == null && sum == node.value) {
      allPaths.push([...currentPath])
    } else {
      f(node.left, sum - node.value, currentPath)
      f(node.right, sum - node.value, currentPath)
    }

    currentPath.pop()
  }

  f(root)

  return allPaths
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
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(getAllPaths(root, 23))
