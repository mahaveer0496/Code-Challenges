import Heap from 'collections/heap'

console.clear()

const merge1 = (lists) => {
  const pointers = Array(lists.length).fill(0)
  const result = []

  // O((a + b + c...)* k^2)
  while (!pointers.every((e) => e == -1)) {
    const elementsArray = getElements(pointers, lists) // k
    const [min, index] = getMinAndIndex(elementsArray) // k
    result.push(min)
    pointers[index]++
    if (pointers[index] === lists[index].length) pointers[index] = -1
  }

  return result
}

const merge2 = (lists) => {
  const minHeap = new Heap([], null, (a, b) => -a[0] + b[0])

  for (let i = 0; i < lists.length; i++)
    minHeap.push([lists[i][0], 0, lists[i]])

  const result = []

  while (minHeap.length > 0) {
    const [number, i, list] = minHeap.pop()
    result.push(number)

    if (list[i + 1]) minHeap.push([list[i + 1], i + 1, list])
  }

  return result
}

console.log(merge2([[5, 8, 9], [1, 7], [10]]))

// console.log(
//   merge1([
//     [5, 8, 9],
//     [1, 7],
//   ]),
// )

function getElements(pointers, lists) {
  const els = []
  for (let i = 0; i < lists.length; i++) {
    const currentList = lists[i]
    els.push(currentList[pointers[i]])
  }
  return els
}

function getMinAndIndex(A) {
  let min = Infinity
  let index = 0
  for (let i = 0; i < A.length; i++) {
    if (A[i] < min) {
      min = A[i]
      index = i
    }
  }
  return [min, index]
}
