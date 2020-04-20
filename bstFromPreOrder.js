function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var bstFromPreorder = function (preorder) {
  let node = new TreeNode(preorder[0]);
  const i = preorder.findIndex((el) => el > node.val);
  console.log(i);
  if (i < 0) {
    return;
  }

  const leftTree = preorder.slice(0, i);
  const rightTree = preorder.slice(i + 1);

  node.left = bstFromPreorder(leftTree);
  node.right = bstFromPreorder(rightTree);

  return node;
};

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12]));
