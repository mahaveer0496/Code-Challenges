import { Heap } from 'collections/heap'

/* 
median is the "middle" number of a sorted list
For even amount of number - median is average of both middle numbers
*/

const getMedian = (lists) => {
  let totalElements = 0

  lists.forEach((list) => {
    totalElements += list.length
  })

  let k = (totalElements + 1) / 2

  const minHeap = new Heap([], null, (a, b) => b[0] - a[0])

  lists.forEach((list) => {
    minHeap.push([list[0], 0, list])
  })

  let counter = 0
  while (minHeap.length > 0) {
    const [number, i, list] = minHeap.pop()
    counter++

    if (counter === k) {
      return number
    }

    if (list[i + 1]) {
      minHeap.push([list[i + 1], i + 1, list])
    }
  }
}

console.log(
  getMedian(
    [
      [2, 6, 8],
      [3, 6, 7],
      [1, 3, 4],
    ],
    15,
  ),
)
