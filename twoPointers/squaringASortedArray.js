/* 
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example -
Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]

> The final array is sorted
*/


const squareEm1 = (A) => A.map(x => x * x).sort()
const squareEm2 = (A) => {
  const n = A.length
  const squares = Array(n).fill(0)

  let highestIndex = n - 1
  let left = 0
  let right = n - 1
  while (left <= right) {
    const leftSq = A[left] * A[left]
    const rightSq = A[right] * A[right]
    squares
    leftSq
    rightSq

    if (leftSq > rightSq) {
      squares[highestIndex] = leftSq
      left++
    } else {
      squares[highestIndex] = rightSq
      right--
    }

    highestIndex--
  }


  return squares
}

console.log(squareEm1([-2, -1, 0, 2, 3]))
console.log(squareEm2([-2, -1, 0, 2, 3]))
