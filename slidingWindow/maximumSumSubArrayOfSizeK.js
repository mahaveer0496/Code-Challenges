/* 
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Algorithm 
* v1 - O(n)
  find sums of all windows of size K, see which one is max and pluck that part of array.
* v2 -
  keep currentWindowSum and prevWindowSum, keep comparing and updating the corresponding maxStart and maxEnd indices
  
*/

const sumAll = (A) => A.reduce((a, c) => a + c, 0)

const maxSumV1 = (A, k) => {
  const indexForMax = getMaxIndex(getAllSums(A, k))
  return sumAll(A.slice(indexForMax, indexForMax + k))
}

const maxSumV2 = (A, k) => {
  // find the first window sum
  let currentSum = sumAll(A.slice(0, k))
  let max = currentSum

  for (let i = k; i < A.length; i++) {
    const currentElement = A[i]
    currentSum = currentSum + currentElement - A[i - k]
    max = Math.max(currentSum, max)
  }

  return max
}

console.log(maxSumV1([2, 1, 5, 1, 3, 2], 3))
console.log(maxSumV1([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(maxSumV2([2, 1, 5, 1, 3, 2], 3))
console.log(maxSumV2([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))

function getAllSums(A, k) {
  let start = 0
  let windowSum = 0
  let sums = []

  for (let end = 0; end < A.length; end++) {
    windowSum += A[end]

    if (end >= k - 1) {
      sums.push(windowSum)
      windowSum -= A[start]
      start++
    }
  }
  return sums
}

function getMaxIndex(A) {
  let maxIndex = 0
  let max = -Infinity
  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i]
      maxIndex = i
    }
  }
  return maxIndex
}
