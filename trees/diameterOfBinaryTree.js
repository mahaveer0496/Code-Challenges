/* 
  The diameter of a tree is the number of nodes on the longest path between any two leaf nodes.
  The diameter of a tree may or may not pass through the root.
*/
const getDiameter = (root) => {
  let maxDiameter = 0

  const f = (node) => {
    if (!node) return 0

    const leftTreeHeight = f(node.left)
    const rightTreeHeight = f(node.right)

    if (leftTreeHeight != 0 && rightTreeHeight != 0) {
      const diameter = leftTreeHeight + rightTreeHeight + 1
      maxDiameter = Math.max(diameter, maxDiameter)
    }

    return Math.max(leftTreeHeight, rightTreeHeight) + 1
  }

  f(root)

  return maxDiameter
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)

console.log(getDiameter(root))

root.left.left = null
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
root.right.left.right.left = new TreeNode(10)
root.right.right.left.left = new TreeNode(11)

console.log(getDiameter(root))
