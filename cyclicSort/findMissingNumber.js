const findMissingNumber = (A) => {
  const n = A.length

  let i = 0
  while (i < n) {
    const j = A[i]
    if (A[i] < n && A[i] != A[j]) {
      ;[A[i], A[j]] = [A[j], A[i]]
    } else {
      i++
    }
  }

  for (let i = 0; i < n; i++) {
    if (A[i] != i) {
      return i
    }
  }
  return n
}

console.log(findMissingNumber([4, 0, 3, 1]))
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1]))

// alternative loop
// for (let i = 0; i < n; i++) {
//   while (true) {
//     const j = A[i]
//     if (A[i] < n && A[i] != A[j]) {
//       ;[A[i], A[j]] = [A[j], A[i]]
//     } else {
//       break
//     }
//   }
// }
