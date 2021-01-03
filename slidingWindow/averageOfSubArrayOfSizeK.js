/* 
Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

Algorithm - 
* Brute force
  Get all subarrays of size k, find average for all of them.
* Use sliding window - 
  Get Average of arr[0,k] then arr[0+1, k+1]....arr[n-k,n]
*/

const avgBrute = (arr, k) => {
  const avgs = []
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0
    for (let j = i; j < i + k; j++) {
      sum += arr[j]
    }
    avgs.push(sum / k)``
  }
  return avgs
}
const avgSmart = (arr, k) => {
  const avgs = []

  let firstSum = 0
  for (let i = 0; i < k; i++) {
    firstSum += arr[i]
  }
  avgs.push(firstSum / k)

  let previousSum = firstSum
  for (let i = k; i < arr.length; i++) {
    const currentSum = previousSum + arr[i] - arr[i - k]
    avgs.push(currentSum / k)
    previousSum = currentSum
  }

  return avgs
}

const avgSmartV2 = (A, k) => {
  const avgs = []
  let windowSum = 0
  let start = 0  
  for (let end = 0; end < A.length; end++) {    
    // while the window length < k, keep adding as usual
    windowSum += A[end]
    // when window length >= k - 1, means we need to start sliding
    if (end >= k - 1) {
      // push the current sum
      avgs.push(windowSum / k)
      // decrease the start number
      windowSum -= A[start]
      start++
    }
  }
}
const maxSum = (arr, k) => {
  let maxSum = -Infinity
  let firstSum = 0
  for (let i = 0; i < k; i++) {
    firstSum += arr[i]
  }
  maxSum = firstSum
  let indexRange = []
  let previousSum = firstSum
  for (let i = k; i < arr.length; i++) {
    const currentSum = previousSum + arr[i] - arr[i - k]
    maxSum = Math.max(currentSum, maxSum)
    indexRange = [i - k, i]
    previousSum = currentSum
  }
  return [maxSum, indexRange]
}

console.log(avgBrute([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))
console.log(avgSmart([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))
console.log(maxSum([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))


