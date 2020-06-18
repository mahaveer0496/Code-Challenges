/* 
Prefix Sum is a technique in which cummulative sum of array items is calculated.
Which allows calulation of sum in range A[x,y] in O(1) time

Formula -
Sum(0,x) = CummulatedA[x] 
Sum(x,y) = Sum(0,y) - Sum(0, x-1)


Example -
A = [1,2,3,4]
CummulatedA = [1,3,6,10]

To get Sum(0,3) we can directly use for loop on original array and get the sum. But, thats O(n)
We can use CummulatedA to get Sum(0,3) by using the formula above

Sum(0,3) = CummulatedA[3] = 10

Sum(1,2) = Sum(0,2) - Sum(0,0) = CummulatedA[2] - CummulatedA[0] = 6 - 1 = 5
which is true if we add the traditional way (2+3)
*/

const { scan } = require('../utils/scan')

const prefixSum = (arr, range) => {
  const auxArr = scan(arr)
  const [start, end] = range
  if (start == 0) return auxArr[end]
  return auxArr[end] - auxArr[start - 1]
}

const arr = [1, 2, 3, 4, 5, -5]
console.log(prefixSum(arr, [0, arr.length - 1]) === 10)
console.log(prefixSum(arr, [0, 3]) === 10)
console.log(prefixSum(arr, [2, arr.length - 1]) === 7)
