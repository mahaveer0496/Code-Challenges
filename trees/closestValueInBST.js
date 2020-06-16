// Given a BST and a value, find value in BST which is closest to given value

const { default: BST } = require('./bst')
const { bfs } = require('./dfsAndBfs')

// Just iterate over whole tree, while comparing the absolute difference and updating closest accordingly
const getClosestValueBrute = (bst, target) => {
  let closest = Infinity
  const onEnter = (node) => {
    if (Math.abs(target - closest) > Math.abs(target - node.value)) {
      closest = node.value
    }
  }
  bfs(bst.root, onEnter)
  return closest
}

// recursively keep eliminitating part of BST, instead of going through all of the nodes.
const getClosestValueRecursiveButSmart = (bst, target) => {
  const helper = (node, target, closest) => {
    if (!node) return closest
    if (Math.abs(target - closest) > Math.abs(target - node.value)) {
      closest = node.value
    }
    if (target < node.value) return helper(node.left, target, closest)
    else if (target > node.value) return helper(node.right, target, closest)
    else return closest
  }
  return helper(bst.root, target, Infinity)
}
const bst = new BST()
  .insert(9)
  .insert(4)
  .insert(6)
  .insert(20)
  .insert(170)
  .insert(15)
  .insert(1)

console.log(getClosestValueBrute(bst, 100))
console.log(getClosestValueRecursiveButSmart(bst, 100))
