const swap = (A, i, j) => {
  ;[A[i], A[j]] = [A[j], A[i]]
}

const dutchNationalFlag = (A) => {
  let low = 0
  let mid = 0
  let high = A.length - 1

  while (mid <= high) {
    switch (A[mid]) {
      case 0:
        swap(A, low, mid)
        low++
        mid++
        break
      case 1:
        mid++
        break
      case 2:
        swap(A, mid, high)
        // mid isnt incremented here cuz element coming at mid _after swap_ may not be `1`
        high--
        break
      default:
        break
    }
  }
  return A
}

console.log(dutchNationalFlag([0, 1, 2, 1, 0]))
