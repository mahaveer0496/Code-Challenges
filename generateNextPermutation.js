const swap = (A, i, j) => {
  ;[A[i], A[j]] = [A[j], A[i]]
}

const reverse = (A, start, num) => {
  let end = A.length - 1
  let i = start
  let swapIndex = null
  let swapValue = Infinity
  while (start <= end) {
    if (i < end) {
      swap(A, i, end)
    }
    if (A[end] > num && A[end] <= swapValue) {
      swapValue = A[end]
      swapIndex = end
    }

    end--
    i++
  }
  return swapIndex
}

const nextPermutation = (A) => {
  let i = A.length - 1

  while (A[i - 1] >= A[i]) {
    i--
  }

  const swapIndex = reverse(A, i, A[i - 1])
  if (swapIndex) swap(A, i - 1, swapIndex)
  return A
}
console.log(nextPermutation([1, 2, 4, 5, 3]))
