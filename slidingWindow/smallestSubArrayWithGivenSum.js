/* 
Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

Algortihm -
* Brute Force 
  Just create all subarrays of length 1 to n, filter out those whose sum >= given sum, return the smallest one
* Dynamic Sliding Window
  * First, we will add-up elements from the beginning of the array until their sum becomes greater than or equal to ‘S’.
  * These elements will constitute our sliding window. We are asked to find the smallest such window having a sum greater than or equal to ‘S’. We will remember the length of this window as the smallest window so far.
  * After this, we will keep adding one element in the sliding window (i.e. slide the window ahead), in a stepwise fashion.
  * In each step, we will also try to shrink the window from the beginning. We will shrink the window until the window’s sum is smaller than ‘S’ again. This is needed as we intend to find the mallest window. This shrinking will also happen in multiple steps; in each step we will do two things:
    * Check if the current window length is the smallest so far, and if so, remember its length.
    * Subtract the first element of the window from the running sum to shrink the sliding window.
*/

const getArraySum = (arr) => arr.reduce((acc, curr) => acc + curr, 0)

const smallestSubArrayWithGivenSumBruteForce = (arr, sum) => {
  const allSubArrays = []
  const n = arr.length
  for (let k = 1; k <= n; k++) {
    for (let i = 0; i < n - k + 1; i++) {
      const subArray = []
      for (let j = i; j < k + i; j++) {
        subArray.push(arr[j])
      }
      allSubArrays.push(subArray)
    }
  }
  // allSubArrays
  const subarraysWithGivenSum = allSubArrays.filter((arr) => {
    return getArraySum(arr) >= sum
  })

  const smallestLength = subarraysWithGivenSum.reduce(
    (acc, curr) => (acc < curr.length ? acc : curr.length),
    Infinity,
  )
  return smallestLength == Infinity ? -1 : smallestLength
}

const smallestSubArrayWithGivenSumDynamicWindow = (arr, sum) => {
  let windowSum = 0
  let windowStart = 0
  let minLength = Infinity
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]
    while (windowSum >= sum) {
      minLength = Math.min(windowEnd - windowStart + 1, minLength)
      windowSum -= arr[windowStart]
      windowStart += 1
    }
  }
  if (minLength == Infinity) {
    return 0
  }
  return minLength
}

console.log(smallestSubArrayWithGivenSumBruteForce([2, 1, 5, 2, 8], 7))
console.log(smallestSubArrayWithGivenSumDynamicWindow([2, 1, 5, 2, 8], 7))
