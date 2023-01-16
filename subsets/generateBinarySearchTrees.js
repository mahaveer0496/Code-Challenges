/*
Given a number ‘n’, write a function to return all structurally unique Binary Search Trees (BST) that can store values 1 to ‘n’?
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findUniqueTrees(n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  console.log(arr);

  const f = (a) => {
    if (a.left <= 0) return [];
    if (a.length === 1) return [new TreeNode(a[0])];

    const results = [];

    for (let i = 0; i < a.length; i++) {
      const currentElement = a[i];

      const lefts = f(a.slice(0, i));
      const rights = f(a.slice(i + 1));

      if (lefts.length === 0 && rights.length === 0) {
        results.push(new TreeNode(currentElement));
      }

      if (lefts.length === 0 && rights.length !== 0) {
        for (const right of rights) {
          results.push(new TreeNode(currentElement, null, right));
        }
      }

      if (lefts.length !== 0 && rights.length === 0) {
        for (const left of lefts) {
          results.push(new TreeNode(currentElement, left, null));
        }
      }

      if (lefts.length !== 0 && rights.length !== 0) {
        for (const left of lefts) {
          for (const right of rights) {
            results.push(new TreeNode(currentElement, left, right));
          }
        }
      }
    }

    return results;
  };

  return f(arr);
}

console.log(findUniqueTrees(1));
console.log(findUniqueTrees(2));
console.log(findUniqueTrees(3));

function findUniqueTrees2(n) {
  if (n <= 0) {
    return [];
  }

  function f(start, end) {
    const result = [];
    if (start > end) {
      result.push(null);

      return result;
    }

    for (let i = start; i < end + 1; i++) {
      const leftSubtrees = f(start, i - 1);
      const rightSubtrees = f(i + 1, end);
      for (let p = 0; p < leftSubtrees.length; p++) {
        for (let q = 0; q < rightSubtrees.length; q++) {
          const root = new TreeNode(i, leftSubtrees[p], rightSubtrees[q]);
          result.push(root);
        }
      }
    }

    return result;
  }

  return f(1, n);
}
