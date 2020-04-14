// TODO: Check why answer differs by 1
// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \
//       4   5
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//  Diameter is the longest path from one leaf to another
var diameterOfBinaryTree = function (root) {
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);
  return leftHeight + rightHeight + 1;
};

const height = (node) => {
  if (node == null) return 0;
  console.log(JSON.stringify(node, null, 2));

  var leftHeight = height(node.left);
  var rightHeight = height(node.right);
  const result = Math.max(leftHeight, rightHeight) + 1;
  return result;
};

const tree = {
  root: {
    val: 1,
    left: {
      val: 2,
      left: { val: 4 },
      right: { val: 5 },
    },
    right: {
      val: 3,
    },
  },
};

console.log(height(tree.root));
// console.log(diameterOfBinaryTree(tree.root));
