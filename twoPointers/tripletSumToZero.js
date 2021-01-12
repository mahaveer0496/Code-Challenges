/*
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
 
*/

const tripletSumToZero = (A) => {
  A.sort()
  const triplets = []

  for (let i = 0; i < A.length; i++) {
    if (i > 0 && A[i] === A[i - 1]) continue

    searchPairs(A, -A[i], i + 1, triplets)

  }
  return triplets
}

const searchPairs = (A, target, left, triplets) => {
  let right = A.length - 1
  while (left < right) {
    const currentSum = A[left] + A[right]

    if (currentSum === target) {
      triplets.push([-target, A[left], A[right]])
      left++
      right--

      while (left < right && A[left] === A[left - 1]) left++
      while (left < right && A[left] === A[left - 1]) right--
    }

    else if (target > currentSum) left++
    else right--
  }
}


console.log(tripletSumToZero([-3, 0, 1, 2, -1, 1, -2]))