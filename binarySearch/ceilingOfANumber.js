/*
Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.
*/

const { default: binarySearch } = require('./binarySearch')

const ceilingOfNumber = (A, key) => {
  const n = A.length

  if (key > A[n - 1]) {
    return -1
  }

  let start = 0
  let end = n - 1
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2)
    if (key < A[mid]) {
      end = mid - 1
    } else if (key > A[mid]) {
      start = mid + 1
    } else {
      return mid
    }
  }

  return start
}

console.log(ceilingOfNumber([4, 6, 10], 6))
console.log(ceilingOfNumber([1, 3, 8, 10, 15], 12))
console.log(ceilingOfNumber([4, 6, 10], 17))
console.log(ceilingOfNumber([4, 6, 10], -1))
