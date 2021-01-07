/* 
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

E.g -
Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6

Algorithm - 
* sliding window again, if current Element is one keep going right, increment onesCount
  if windowSize - onesCount > k, that means in the current window we have zero count > k, but we can only replace upto k zeros, so we start shrinking window, by incrementing start.
  If the item at the `start` is also one, we need decrement onesCount in the current window, cuz _that_ one is no longer part of the window.
*/
const getLongestSubArray = function (A, k) {
  let maxLength = 0
  let start = 0
  let onesCount = 0

  for (let end = 0; end < A.length; end++) {
    const currentElement = A[end]
    const windowSize = end - start + 1

    if (currentElement == 1) onesCount++

    if (windowSize - onesCount > k) {
      if (A[start] == 1) onesCount--
      start++
    }

    maxLength = Math.max(maxLength, windowSize)
  }

  return maxLength
};

console.log(getLongestSubArray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2))