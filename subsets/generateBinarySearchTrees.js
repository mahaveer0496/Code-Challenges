/*
Given a number ‘n’, write a function to return all structurally unique Binary Search Trees (BST) that can store values 1 to ‘n’?
*/

function findUniqueTrees(n) {
  if (n <= 0) {
    return []
  }

  function f(start, end) {
    const result = []
    if (start > end) {
      result.push(null)

      return result
    }

    for (let i = start; i < end + 1; i++) {
      const leftSubtrees = f(start, i - 1)
      const rightSubtrees = f(i + 1, end)
      for (let p = 0; p < leftSubtrees.length; p++) {
        for (let q = 0; q < rightSubtrees.length; q++) {
          const root = new TreeNode(i, leftSubtrees[p], rightSubtrees[q])
          result.push(root)
        }
      }
    }

    return result
  }

  return f(1, n)
}

console.log(`Total trees: ${findUniqueTrees(2).length}`)
console.log(`Total trees: ${findUniqueTrees(3).length}`)

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}
