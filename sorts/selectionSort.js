const selectionSort = (A) => {
  for (let i = 0; i < A.length; i++) {
    const minIndex = findMinIndex(i + 1, A)
    ;[A[minIndex], A[i]] = [A[i], A[minIndex]]
  }

  return A
}

function findMinIndex(start, A) {
  let minIndex = start - 1
  for (let i = start; i < A.length; i++) {
    if (A[i] < A[minIndex]) {
      minIndex = i
    }
  }

  return minIndex
}

console.log(selectionSort([2, 3, 8, 9, 5, 6, 5]))
