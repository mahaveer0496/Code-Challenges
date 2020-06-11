class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const traverse = function (root) {
  const result = []
  let node = root
  const queue = [node]
  while (queue.length > 0) {
    const levelSize = queue.length
    const level = []
    for (let i = 0; i < levelSize; i++) {
      node = queue.shift()
      level.push(node)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    result.push(level)
  }
  return result
}

const getAllPaths = (node, allPaths, currentPath = []) => {
  if (!node) return
  currentPath.push(node.value)
  if (node.left == null && node.right == null) {
    // show reference issue, i.e what happens without shallow copying the array (show pythontutor)
    allPaths.push([...currentPath])
  } else {
    getAllPaths(node.left, allPaths, currentPath)
    getAllPaths(node.right, allPaths, currentPath)
  }
  currentPath.pop()
}
const add = (acc, curr) => acc + +curr

const find_paths = function (root, sum) {
  const allPaths = []
  getAllPaths(root, allPaths, [])

  // TODO: Write your code here
  return allPaths.filter((path) => path.reduce(add, 0) === sum)
}

const find_sum_of_path_numbers = function (root) {
  const allPaths = []
  getAllPaths(root, allPaths, [])
  const stringPaths = allPaths.map((path) => path.join('')).reduce(add, 0)
  console.log(stringPaths)
  return -1
}

const find_path = function (root, sequence) {
  const helper = (node, sequence, i = 0) => {
    if (!node) return false
    if (i === sequence.length - 1 && node.value === sequence[i]) return true
    if (node.value === sequence[i])
      return (
        helper(node.left, sequence, i + 1) ||
        helper(node.right, sequence, i + 1)
      )
    else return false
  }

  const result = helper(root, sequence)
  return result
}

const flatten = (arr) => arr.reduce((acc, curr) => [...acc, ...curr], [])
const count_paths = function (root, S) {
  const vertices = flatten(traverse(root))
  let allPaths = []
  for (const vertex of vertices) {
    const paths = []
    getAllPaths(vertex, paths)
    allPaths.push(paths)
  }
  allPaths = flatten(allPaths)
  let count = 0
  for (const path of allPaths) {
    const sum = path.reduce(add, 0)
    if (sum === S) {
      count++
    }
  }

  return count
}
const find_diameter = (root) => {
  let diameter = -Infinity

  const helper = (node) => {
    if (!node) return 0
    const left = helper(node.left)
    const right = helper(node.right)
    diameter = Math.max(diameter, left + right + 1)
    return Math.max(left, right) + 1
  }
  helper(root)

  return diameter
}

const find_maximum_path_sum = (root) => {
  let maxSoFar = -Infinity
  const helper = (node) => {
    if (!node) return 0
    const left = Math.max(helper(node.left), 0)
    const right = Math.max(helper(node.right), 0)
    const localMax = left + right + node.value
    maxSoFar = Math.max(localMax, maxSoFar)
    return Math.max(left, right) + node.value
  }
  helper(root)
  return maxSoFar
}
var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.left.left = null
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
root.right.left.right.left = new TreeNode(10)
root.right.right.left.left = new TreeNode(11)
console.log(find_diameter(root))
console.log(find_maximum_path_sum(root))
