const Heap = require('collections/heap')
const { default: getFMap } = require('../utils/getFrequencyMap')

/**
Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.
*/

const topKFrequentNumbers = (A, k = 1) => {
  const frequencyMap = getFMap(A)
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0])

  Object.keys(frequencyMap).forEach((num) => {
    minHeap.push([frequencyMap[num], num])
    if (minHeap.length > k) {
      minHeap.pop()
    }
  })

  const topNumbers = []
  while (minHeap.length) {
    topNumbers.push(minHeap.pop()[1])
  }
  return topNumbers
}

console.log(topKFrequentNumbers([1, 3, 5, 12, 11, 12, 11], 2))
console.log(topKFrequentNumbers([5, 12, 11, 3, 11], 2))
