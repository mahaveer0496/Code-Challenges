/* 
Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.
*/
const nextLetter = (A, key) => {
  const n = A.length
  // if (key > A[n - 1]) return A[0]

  let start = 0
  let end = n - 1
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2)
    if (key < A[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  if (start > n - 1) {
    return A[0]
  }

  return A[start]
}
console.log(nextLetter(['a', 'c', 'f', 'h'], 'f'))
console.log(nextLetter(['a', 'c', 'f', 'h'], 'b'))
console.log(nextLetter(['a', 'c', 'f', 'h'], 'm'))
console.log(nextLetter(['a', 'c', 'f', 'h'], 'h'))
