/* 
Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].
*/

/**
 * Is just like binary search,
 * if target > A[mid], then we know the first occurence will be on the _right_ of `mid` and,
 * if target < A[mid], then we know the first occurence will be on the _left_ of `mid`
 * if target = A[mid], then the first occurence is on the _left_ of mid, _or_ `mid` itself is the first occurence
 * So to search in left, right becomes mid - 1
 * And to search in right, left becomes mid + 1
 *
 * So we run the binarySearch helper twice, once to find the first occurence and once to find the last occurence
 */
const findRange = (A, key) => {
  const result = [-1, -1]

  result[0] = binarySearch(A, key, true)
  if (result[0] != -1) result[1] = binarySearch(A, key, false)

  return result
}

console.log(findRange([4, 6, 6, 6, 9], 6))
console.log(findRange([1, 3, 8, 10, 15], 10))
console.log(findRange([1, 3, 8, 10, 15], 12))

function binarySearch(A, key, searchLeft) {
  let result = -1
  let start = 0
  let end = A.length - 1

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2)
    if (key < A[mid]) {
      end = mid - 1
    } else if (key > A[mid]) {
      start = mid + 1
    } else {
      result = mid

      if (searchLeft) end = mid - 1
      else start = mid + 1
    }
  }

  return result
}
