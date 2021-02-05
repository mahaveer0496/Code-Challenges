/* 

*/
const bubbleSort = (A) => {
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) {
        ;[A[i], A[j]] = [A[j], A[i]]
      }
    }
    console.log(A)
  }
  return A
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))
