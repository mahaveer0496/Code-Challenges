/* 
Given an array of positive and negative numbers, find if there is a subarray (of size at-least one) with 0 sum.

Input: [4, 2, -3, 1, 6]
Output: true 
There is a subarray with zero sum from index 1 to 3.

Input: [4, 2, 0, 1, 6]
Output: true 
There is a subarray with zero sum from index 2 to 2.

Input: [-3, 2, 3, 1, 6]
Output: false
There is no subarray with zero sum.


Algorithm -
This problem is based on prefixSum, once we have prefix sum array. We keep track if an element is seen already or not, 
and if we see same element again then that means that there is a sub array with sum 0

Example - 
[4, 2, -3, 1, 6]
cummulativeArr = [ 4, 6, 3, 4, 10 ]
we see 4 at indices 0 and 3, this means the items between that range (0,3] summed up to 0
*/

const { scan } = require('../utils/scan')

const doesSubArrayWithZeroSumExists = (arr) => {
  const cummulativeArr = scan(arr)
  const map = {}
  for (const item of cummulativeArr) {
    if (item in map) {
      return true
    } else {
      map[item] = true
    }
  }
  return false
}

console.log(doesSubArrayWithZeroSumExists([4, 2, -3, 1, 6]))
console.log(doesSubArrayWithZeroSumExists([4, 2, 0, 1, 6]))
console.log(doesSubArrayWithZeroSumExists([-3, 2, 3, 1, 6]))
