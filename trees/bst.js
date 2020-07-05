class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

exports.default = class BST {
  constructor() {
    this.root = null
  }
  insert(value) {
    const node = new Node(value)
    let currentNode = this.root
    if (this.root == null) this.root = node
    else {
      while (currentNode) {
        // we are at leaf node
        // break
        if (value < currentNode.value) {
          if (currentNode.left == null) {
            currentNode.left = node
            break
          } else {
            currentNode = currentNode.left
          }
        } else if (value >= currentNode.value) {
          if (currentNode.right == null) {
            currentNode.right = node
            break
          } else {
            currentNode = currentNode.right
          }
        }
      }
    }
    return this
  }
  inspect() {
    return JSON.stringify(this, null, 2)
  }
}

// const tree = new BST()
//   .insert(9)
//   .insert(4)
//   .insert(6)
//   .insert(20)
//   .insert(170)
//   .insert(15)
//   .insert(1)

// console.log(tree)

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
