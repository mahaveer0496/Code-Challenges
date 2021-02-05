const findSmallestMissingPositiveNumber1 = (A) => {
  let max = -Infinity
  const obj = {}
  for (let i = 0; i < A.length; i++) {
    obj[A[i]] = true
    max = Math.max(max, A[i])
  }  

  // loop from 1 to n and first missing `i` is the missing number
  for (let i = 1; i < max; i++) {
    if (!(i in obj)) return i
  }

  return max + 1
}


const findSmallestMissingPositiveNumber2 = (A) => {
  const n = A.length
  let i = 0

  while (i < n) {
    const j = A[i] - 1
    // keep swapping elements _within_ range
    if (A[i] > 0 && A[i] < n && A[i] !== A[j]) {
      [A[i], A[j]] = [A[j], A[i]]
    } else {
      i++
    }
  }

  // element not in correct position is the missing one
  for (let i = 0; i < A.length; i++) {
    if (A[i] - 1 !== i) return i + 1
  }

  return n + 1
}
