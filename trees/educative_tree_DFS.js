class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

/*
    1
  2   3
4  5  6   7

[1]
[4, 5, 6 ,7]
2
allPaths = [[1 2 4], [1 2 5]]
[1 2 5] 
1 2 4, 1 2 5, 1 3 6, 1 3 7
queue = [1]

// 1 2 4 5 3 6 7
*/

const bfs = function (root) {
  const result = []
  let node = root
  const queue = [node]
  while (queue.length) {
    const levelSize = queue.length
    const level = []
    for (let i = 0; i < levelSize; i++) {
      node = queue.shift()
      level.push(node.value)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    result.push(level)
  }
  return result
}

const dfs = (node) => {
  if (!node) return
  console.log(node.value)
  if (node.left) dfs(node.left)
  if (node.right) dfs(node.right)
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
/*
     1
  2     3
4  5   6   7
      
[[1 2 4], [1 2 5], [1 3 6], [1 3 7]

2 4, 2 5, 3 6, 3 7
4, 5, 6, 7
*/
// 3. currentPath = [1,2,4]
// allPath = [[1,2,4]]
/*
const getAllPaths = (node, allPaths, currentPath = []) => {
  // tree, [], []
  if (!node) return
  currentPath.push(node.value) // currentPath = [1]
  if (node.left == null && node.right == null) {
    // show reference issue, i.e what happens without shallow copying the array (show pythontutor)
    allPaths.push(currentPath)
  } else {
    getAllPaths(node.left, allPaths, currentPath) // getAllPaths(2 -4 - 5, [], [1])
    // 2. currentPath = [1, 2]
    //    getAllPaths(4, [], [1, 2])

    getAllPaths(node.right, allPaths, currentPath) //  getAllPaths(5, [[1,2,4]], currentPath)
  }
  currentPath.pop()
}
*/

const add = (acc, curr) => acc + +curr

const find_paths = function (root, sum) {
  const allPathsFromRoot = []
  getAllPaths(root, allPathsFromRoot, [])
  return allPathsFromRoot
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
const getAllPossiblePaths = (tree) => {
  const vertices = bfs(tree)
  let allPossiblePaths = []
  for (const vertex of vertices) {
    const allPathsFromCurrentVertex = []
    getAllPaths(vertex, allPathsFromCurrentVertex, [])
    allPossiblePaths.push(allPathsFromCurrentVertex)
  }
  return flatten(allPossiblePaths).filter((path) => path.reduce(add, 0) == 6)
}
const count_paths = function (root, S) {
  const vertices = bfs(root)

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
  /*
     1
  2     3
4  5   6   7
*/
  let maxDiameter = -Infinity

  const helper = (node) => {
    if (!node) return 0
    const left = helper(node.left)
    const right = helper(node.right)
    const diameterOfCurrentNode = left + right + 1
    maxDiameter = Math.max(maxDiameter, diameterOfCurrentNode)
    return Math.max(left, right) + 1
  }
  helper(root)

  return maxDiameter
}

/*
const find_diameter = (root) => {

     1
  2     3
4  5   6   7

let maxDiameter = -Infinity

const helper = (node) => {
  if (!node) return 0
  const left = helper(node.left)                                            
  const right = helper(node.right)
  const diameterOfCurrentNode = left + right + 1
  maxDiameter = Math.max(maxDiameter, diameterOfCurrentNode)
  return Math.max(left, right) + 1
}
helper(root)

return maxDiameter
}



*/

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
root.left.right = new TreeNode(5)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(7)
// root.left.left = null
// root.right.left.left = new TreeNode(7)
// root.right.left.right = new TreeNode(8)
// root.right.right.left = new TreeNode(9)
// root.right.left.right.left = new TreeNode(10)
// root.right.right.left.left = new TreeNode(11)
console.log(flatten(bfs(root)))
// console.log(find_maximum_path_sum(root))
