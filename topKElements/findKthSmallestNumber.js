const Heap = require('collections/heap')

const findKSmallestNumbers = (A, k) => {
  const maxHeap = new Heap()
  for (let i = 0; i < k; i++) {
    maxHeap.push(A[i])
  }

  for (let i = k; i < A.length; i++) {
    const currentElement = A[i]
    if (currentElement < maxHeap.peek()) {
      maxHeap.pop()
      maxHeap.push(currentElement)
    }
  }
  return maxHeap.peek()
}

console.log(findKSmallestNumbers([3, 1, 5, 12, 2, 11], 3))
console.log(findKSmallestNumbers([5, 12, 11, -1, 12], 3))
