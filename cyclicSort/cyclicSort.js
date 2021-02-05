const cyclicSort = (A) => {
  let i = 0
  while (i < A.length) {
    const j = A[i] - 1
    if (A[i] !== A[j]) {
      ;[A[i], A[j]] = [A[j], A[i]]
    } else {
      i += 1
    }
  }
  return A
}


console.log(cyclicSort([2, 6, 4, 3, 1, 5]))

