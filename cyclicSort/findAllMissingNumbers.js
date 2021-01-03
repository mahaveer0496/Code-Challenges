const findAllMissingNumbers = (A) => {
  let i = 0
  const n = A.length

  while (i < n) {
    const j = A[i] - 1
    if (A[j] <= n && A[j] != A[i]) {
      ;[A[i], A[j]] = [A[j], A[i]]
    } else {
      i++
    }
  }
  const result = []
  for (let i = 0; i < n; i++) {
    if (A[i] != i + 1) {
      result.push(i + 1)
    }
  }
  return result
}

console.log(findAllMissingNumbers([2, 3, 1, 8, 2, 3, 5, 1]))
console.log(findAllMissingNumbers([2, 4, 1, 2]))
console.log(findAllMissingNumbers([2, 3, 2, 1]))
