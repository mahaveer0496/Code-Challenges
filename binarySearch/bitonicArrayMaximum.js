/*
Find the maximum value in a given Bitonic array. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].
*/
const findMaxInBitonicArray = (A) => {
  const n = A.length - 1
  let start = 0
  let end = n
  while (start < end) {
    const mid = start + Math.floor((end - start) / 2)
    if (A[mid] > A[mid + 1]) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return A[start]
}

console.log(findMaxInBitonicArray([1, 3, 8, 12, 4, 2]))
console.log(findMaxInBitonicArray([3, 8, 3, 1]))
console.log(findMaxInBitonicArray([1, 3, 8, 12]))
console.log(findMaxInBitonicArray([10, 9, 8]))
