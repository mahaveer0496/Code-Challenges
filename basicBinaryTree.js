class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    return this;
  }
  lookup(value) {}
}

const tree = new BST();
tree
  .insert(9)
  .insert(4)
  .insert(6)
  .insert(20)
  .insert(170)
  .insert(15)
  .insert(1);

{
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
}
