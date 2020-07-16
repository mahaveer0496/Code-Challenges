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

const binarySearchRecursive = (A, key) => {
  const f = ({ A, key, l, r }) => {
    if (l <= r) {
      const mid = l + Math.floor((r - l) / 2)
      if (A[mid] == key) return mid

      if (key > A[mid]) {
        return f({ A, key, l: mid + 1, r })
      }
      if (key < A[mid]) {
        return f({ A, key, l, r: mid - 1 })
      }
    } else {
      return -1
    }
  }
  return f({ A, key, l: 0, r: A.length - 1 })
}

const key = 4
const A = [1, 2, 3, 4, 5]
console.log(binarySearch(A, key))
console.log(binarySearchRecursive(A, key))
export default binarySearch
