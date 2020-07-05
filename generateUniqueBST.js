const { default: BST } = require('./trees/bst')

console.clear()
const generateUniqueBST = (n) => {
  const allBSTs = []
  const f = (start, end) => {
    console.log({ start, end })
    const bst = new BST()
    if (start > end) {
      return null
    }
    for (let i = start; i <= end; i++) {
      bst.insert(i)
      bst.root.left = f(start, i - 1)
      // bst.root.right = f(i + 1, end)
      allBSTs.push(bst)
    }
    return bst
  }
  f(1, 3)
  return allBSTs
}

console.log(generateUniqueBST(3))
