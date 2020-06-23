const maxSubArray = function (nums) {
  let maxEndingHere = -Infinity
  let maxSoFar = -Infinity
  nums.forEach((num) => {
    maxEndingHere = Math.max(num, maxEndingHere + num)
    maxSoFar = Math.max(maxEndingHere, maxSoFar)
  })
  return maxSoFar
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([-1]))
console.log(maxSubArray([1]))
console.log(maxSubArray([-2, -1]))
