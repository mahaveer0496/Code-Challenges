/* 
Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].
*/

const binarySearch = (A, key, findMaxIndex) => {
  let keyIndex = -1
  let start = 0
  let end = A.length - 1
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2)
    if (key < A[mid]) {
      end = mid - 1
    } else if (key > A[mid]) {
      start = mid + 1
    } else {
      keyIndex = mid
      if (findMaxIndex) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  return keyIndex
}

const findRange = (A, key) => {
  const result = [-1, -1]
  result[0] = binarySearch(A, key, false)
  if (result[0] != -1) {
    result[1] = binarySearch(A, key, true)
  }
  return result
}

console.log(findRange([4, 6, 6, 6, 9], 6))
console.log(findRange([1, 3, 8, 10, 15], 10))
console.log(findRange([1, 3, 8, 10, 15], 12))
