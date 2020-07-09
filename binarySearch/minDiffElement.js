const minDiffElements = (A, key) => {
  const n = A.length - 1
  if (key < A[0]) return A[0]
  if (key > A[n]) return A[n]

  let start = 0
  let end = n

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2)
    if (key < A[mid]) {
      end = mid - 1
    } else if (key > A[mid]) {
      start = start + 1
    } else {
      return A[mid]
    }
  }

  if (A[start] - key < A[end] - key) {
    return A[start]
  }
  return A[end]
}

console.log(minDiffElements([4, 6, 10], 7))
console.log(minDiffElements([4, 6, 10], 4))
console.log(minDiffElements([1, 3, 8, 10, 15], 12))
console.log(minDiffElements([4, 6, 10], 17))
