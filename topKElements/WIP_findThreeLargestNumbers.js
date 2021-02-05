const find3LargestSort = (A) => {
  A.sort((a, b) => a - b)
  return A.slice(A.length - 3)
}

// TODO
const find3LargestWithHeap = (params) => {}

console.log(find3LargestSort([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))
