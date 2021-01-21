/*
A split of an integer array is good if:

The array is split into three non-empty contiguous subarrays - named left, mid, right respectively from left to right.
The sum of the elements in left is less than or equal to the sum of the elements in mid, and the sum of the elements in mid is less than or equal to the sum of the elements in right.
Given nums, an array of non-negative integers, return the number of good ways to split nums. As the number may be too large, return it modulo 109 + 7.
*/

/**
 * construct prefix array, so we can find sum of a range in O(1)
 * for each i -> [0,n] and j -> (i,n], prefix[i] becomes sum of left part, prefix[j] - prefix[i] becomes sum of middle part, and rest is the right part.
 * Simply test if condition is satisfied.
 *
 * time - O(n^2)
 */
const waysToSplitBrute = (A) => {
  const prefixArray = getPrefixArray(A)

  let result = 0
  for (let i = 0; i < prefixArray.length; i++) {
    for (let j = i + 1; j < prefixArray.length; j++) {
      const sumLeft = prefixArray[i]
      const sumMid = prefixArray[j] - prefixArray[i]
      const sumRight = prefixArray[prefixArray.length - 1] - prefixArray[j]

      if (sumLeft <= sumMid && sumMid <= sumRight) result++
    }
  }
  return result
}

const waysToSplit = (A) => {
  const prefixArray = getPrefixArray(A)
  const MOD = 10000000007

  let result = 0

  for (let i = 1; i < prefixArray.length; i++) {
    const left = helper(prefixArray, A[i - 1], i, true)
    const right = helper(prefixArray, A[i - 1], i, false)

    if (left == -1 || right == -1) continue

    result
    result = (result + ((right - left + 1) % MOD)) % MOD
  }

  return result
}

console.log(waysToSplitBrute([3, 2, 1]))
console.log(waysToSplit([1, 2, 2, 2, 5, 0]))

function helper(A, leftSum, index, searchLeft) {
  const n = A.length
  let left = index
  let right = n - 1
  let result = -1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    const midSum = A[mid] - A[index - 1]
    const rightSum = A[n - 1] - A[mid]

    if (leftSum <= midSum && midSum <= rightSum) {
      result = mid
      if (searchLeft) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else if (leftSum > midSum) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return result
}
function getPrefixArray(A) {
  const result = []
  for (const element of A) {
    const lastElement = result.slice(-1)[0]
    result.push(lastElement ? lastElement + element : element)
  }
  return result
}
