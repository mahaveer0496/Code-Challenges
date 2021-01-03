const firstKMissingNumbers = (A, k) => {
  const n = A.length
  let i = 0
  // perform cyclic sort-
  while (i < n) {
    const j = A[i] - 1
    if (A[i] > 0 && A[i] <= n && A[i] != A[j]) {
      ;[A[i], A[j]] = [A[j], A[i]]
    } else {
      i++
    }
  }

  // numbers that are at incorrect index are missing, these numbers could be any number outside of array's range
  const missingNumbers = []
  const extraNumbers = new Set()
  for (let i = 0; i < n; i++) {
    if (missingNumbers.length < k) {
      if (A[i] != i + 1) {
        missingNumbers.push(i + 1)
        extraNumbers.add(A[i])
      }
    }
  }

  i = 1
  while (missingNumbers.length < k) {
    // keep trying candidateNumber till we fill missingNumbers array
    const candidateNumber = i + n
    if (!extraNumbers.has(candidateNumber)) {
      missingNumbers.push(candidateNumber)
    }
    i++
  }
  return missingNumbers
}

console.log(firstKMissingNumbers([3, -1, 4, 5, 5], 3))
console.log(firstKMissingNumbers([2, 3, 4], 3))
console.log(firstKMissingNumbers([-2, -3, 4], 2))
