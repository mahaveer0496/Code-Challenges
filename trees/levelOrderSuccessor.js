/* 
one solution is to just do level order traversal, then in final array, find the current node and return the next
*/
const getLevelOrderSuccessor = (root, node) => {
  const q = [root]

  let foundNode = false
  let result = null
  while (q.length) {
    const levelSize = q.length

    // this inner loop isnt really needed cuz thats only needed when we need "each level as separate sub array"
    for (let i = 0; i < levelSize; i++) {
      const currentNode = q.shift()

      if (foundNode) {
        result = currentNode.value
      }

      if (currentNode == node) {
        foundNode = true
      }

      currentNode.left && q.push(currentNode.left)
      currentNode.right && q.push(currentNode.right)
    }
  }
  return result
}

const getLevelOrderSuccessor2 = (root, node) => {
  const q = [root]

  while (q.length) {
    const currentNode = q.shift()

    currentNode.left && q.push(currentNode.left)
    currentNode.right && q.push(currentNode.right)

    if (currentNode == node) break
  }

  if (q.length) return q.shift().value

  return null
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

console.log(getLevelOrderSuccessor(root, root.right))
console.log(getLevelOrderSuccessor2(root, root.right))
