/* 
Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope with minimum cost. The cost of connecting two ropes is equal to the sum of their lengths.
*/

/* 
Simple greedy algo
* Take 2 smallest elements, sum them, put the sum in array
* From new array take 2 smallest elements, repeat 

One optimization could be to sort the array and put new sum in correct place every time so,
* Sort array, take 1st 2, sum them, put the sum in correct place, repeat
*/
const Heap = require('collections/heap')
console.clear()

const connectRopes1 = (A) => {
  A.sort((a, b) => a - b)

  let totalCost = 0
  let i = 0
  while (i < A.length && A.length > 1) {
    const sum = A[0] + A[1]
    totalCost += sum

    A.splice(0, 2)
    insert(sum, A)

    i++
  }

  return totalCost
}

/* 
push all elements in min heap, take top 2 els, sum and put em back and repeat
 */
const connectRopes2 = (A) => {
  const minHeap = new Heap(A, null, (a, b) => b - a)
  let totalCost = 0

  while (minHeap.length > 1) {
    const sum = minHeap.pop() + minHeap.pop()
    totalCost += sum
    minHeap.push(sum)
  }

  return totalCost
}

console.log(connectRopes2([3, 4, 5, 6]))
console.log(connectRopes2([1, 3, 11, 5]))
console.log(connectRopes2([1, 3, 11, 5, 2]))

function insert(el, A) {
  for (let i = 0; i < A.length; i++) {
    if (el < A[i]) {
      A.splice(i, 0, el)
      return A
    }
  }
  A.push(el)
}
