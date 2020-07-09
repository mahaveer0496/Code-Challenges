const binarySearch = (A, key, isAscending = true) => {
  let start = 0
  let end = A.length - 1
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2)
    if (key == A[mid]) {
      return mid
    } else {
      if (isAscending) {
        if (key < A[mid]) {
          end = mid - 1
        } else {
          start = mid + 1
        }
      } else {
        if (key < A[mid]) {
          start = mid + 1
        } else {
          end = mid - 1
        }
      }
    }
  }
  return -1
}

// console.log(binarySearch([1, 2, 3, 4, 5], 3))

export default binarySearch
