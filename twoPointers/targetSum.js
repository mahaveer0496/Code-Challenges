/**
 * Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
 */

/**
 * just take all the pairs and sum them
 *
 * time = O(n^2)
 */
const targetSumBrute = (A, t) => {
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] + A[j] === t) return [i, j]
    }
  }
  return []
}

/**
 * As the array is sorted, for each element `x` we can do binary search in rest of the array for `t-x`
 *
 * time = O(n * log(n)), as we perform `n` binary searchs
 */
const targetSumBinary = (A, t) => {
  for (let i = 0; i < A.length; i++) {
    const y = t - A[i]
    const j = binarySearch(A, y)
    if (j) return [i, j]
  }
  return []
}

/**
 * As the array is sorted, we can use 2 pointers, `l` and `r`.
 * if A[l]+A[r] === `t` return
 * if A[l]+A[r] < `t` we increment `l`, cuz anything on left of `l` will just give smaller sum
 * else we decrement `r` as we need smaller sum
 *
 * time = O(n), just 1 pass through array
 */
const targetSumPointers = (A, t) => {
  let l = 0
  let r = A.length - 1
  while (l <= r) {
    const currentSum = A[l] + A[r]
    if (currentSum === t) return [l, r]
    if (currentSum < t) l++
    else r--
  }

  return []
}

const targetSumHash = (A, t) => {
  return []
}

console.log(targetSumBrute([1, 2, 3, 4, 6], 6))
console.log(targetSumBinary([1, 2, 3, 4, 6], 6))
console.log(targetSumPointers([1, 2, 3, 4, 6], 6))
console.log(targetSumHash([1, 2, 3, 4, 6], 6))

function binarySearch(A, x) {
  if (!A || A.length === 0) return null
  if (A.length === 1) return A[0]

  const f = (l, r) => {
    if (l > r) return

    const mid = Math.floor((l + r) / 2)
    const midEl = A[mid]

    if (x === midEl) return mid
    if (x < midEl) return f(l, mid - 1)
    return f(mid + 1, r)
  }

  return f(0, A.length - 1)
}
