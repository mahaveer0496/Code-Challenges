// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

// Example 1:

// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// for pre order - 1st node is root, thus find the 1st element in array thats > root, all elements between root and that element will be in left subtree and others in right subtree. Recursively create tree.
var bstFromPreorder = function (preorder) {
  preorder;
  if (preorder.length === 0) return null;
  let node = new TreeNode(preorder[0]);
  const i = preorder.findIndex((el) => el > node.val);

  if (i == -1) {
    node.left = bstFromPreorder(preorder.slice(1));
  } else {
    node.left = bstFromPreorder(preorder.slice(1, i));
    node.right = bstFromPreorder(preorder.slice(i));
  }
  return node;
};

console.log(bstFromPreorder([4, 2]));
