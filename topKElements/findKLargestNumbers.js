const Heap = require('collections/heap')

const findKLargestNumbers = (A, k) => {
  const minHeap = new Heap([], null, (a, b) => b - a)
  for (let i = 0; i < k; i++) {
    minHeap.push(A[i])
  }

  for (let i = k; i < A.length; i++) {
    const currentElement = A[i]
    if (currentElement > minHeap.peek()) {
      minHeap.pop()
      minHeap.push(currentElement)
    }
  }
  return minHeap.toArray()
}

console.log(findKLargestNumbers([3, 1, 5, 12, 2, 11], 3))
console.log(findKLargestNumbers([5, 12, 11, -1, 12], 3))
