class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }
  insert(value) {
    const node = new Node(value)
    let currentNode = this.root
    if (this.root == null) this.root = node
    else {
      let parent
      while (currentNode) {
        parent = currentNode
        // we are at leaf node
        // break
        if (value < currentNode.value) {
          // if (currentNode.left == null) {
          //   currentNode.left = node
          //   break
          // } else {
          // currentNode = currentNode.left
          // }
          currentNode = currentNode.left
        } else if (value >= currentNode.value) {
          // if (currentNode.right == null) {
          //   currentNode.right = node
          //   break
          // } else {
          //   currentNode = currentNode.right
          // }
          currentNode = currentNode.right
        }
      }

      if (value < parent.value) {
        parent.left = node
      } else {
        parent.right = node
      }
    }
    return this
  }
  // TODO: Implement this
  insertRescursive(value) {
    const node = new Node(value)
    let parent
    const f = (currentNode = this.root) => {
      if (!currentNode) return
      if (currentNode.value < node.value) {
        return f(currentNode.left)
      } else {
        return f(currentNode.right)
      }
    }
    console.log(f())
    return this
  }
  inspect() {
    return JSON.stringify(this, null, 2)
  }
}
const search = (tree, value) => {
  let currentNode = tree.root
  while (currentNode) {
    if (value == currentNode.value) return [currentNode]
    if (value < currentNode.value) {
      currentNode = currentNode.left
    } else {
      currentNode = currentNode.right
    }
  }

  return [-1]
}
const searchRecursive = (tree, value) => {
  const f = (node) => {
    if (!node) return -1
    if (node.value == value) return node
    if (value < node.value) return f(node.left)
    return f(node.right)
  }
  return [f(tree.root)]
}
const preOrder = (tree) => {
  const result = []
  const f = (node) => {
    if (node) {
      result.push(node)
      f(node.left)
      f(node.right)
    }
  }
  f(tree.root)
  return result
}

const inOrder = (tree) => {
  const result = []
  const f = (node) => {
    if (node) {
      f(node.left)
      result.push(node)
      f(node.right)
    }
  }
  f(tree.root)
  return result
}

const postOrder = (tree) => {
  const result = []
  const f = (node) => {
    if (node) {
      f(node.left)
      f(node.right)
      result.push(node)
    }
  }
  f(tree.root)
  return result
}

const deleteNode = (tree, value) => {
  const node = search(tree, value)
  console.log(node)
  return node
}
const tree = new BST()
  .insert(4)
  .insert(9)
  .insert(5)
  .insert(2)
  .insert(8)
  .insert(12)
  .insert(10)
  .insert(14)

const getNodeValue = (node) => node.value
// console.log(tree)
// console.log(preOrder(tree).map(getNodeValue))
// console.log(inOrder(tree).map(getNodeValue))
// console.log(postOrder(tree).map(getNodeValue))
console.log(search(tree, 2).map(getNodeValue))
// console.log(searchRecursive(tree, 10).map(getNodeValue))
// console.log(deleteNode(tree, 10).map(getNodeValue))

exports.default = BST

// Full binary tree : if every node has 0 or 2 children
//          18
//        /    \
//      15      20
//     /  \
//    40   50
//   /  \
//  30  50
// Complete binary tree : if all levels are completely filled, except possibly the last
//             18
//        /         \
//      15           30
//     /  \         /  \
//   40    50     100   40
//  /  \   /
// 8   7  9
// Perfect binary tree : All internal nodes have children and all leaves are at same level
//            18
//        /       \
//      15         30
//     /  \        /  \
//   40    50    100   40
// Edge – connection between one node to another.
// Path – a sequence of nodes and edges connecting a node with a descendant.
// Height of node – The height of a node is the number of edges on the longest downward path between that node and a leaf.
// Depth –The depth of a node is the number of edges from the node to the tree's root node
// Level – The level of a node is defined by 1 + the number of connections between the node and the root.
