/*
Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.
*/
const minWindow = (A) => {
  let left = 0
  let right = A.length - 1
  let windowMax = -Infinity
  let windowMin = Infinity

  while (left < A.length - 1 && A[left] <= A[left + 1]) left++

  if (left === A.length - 1) return 0;

  while (right > 0 && A[right] >= A[right - 1]) right--

  for (let i = left; i <= right; i++) {
    windowMax = Math.max(windowMax, A[i])
    windowMin = Math.min(windowMin, A[i])
  }

  while (left > 0 && A[left - 1] > windowMin) left--

  while (right < A.length - 1 && A[right + 1] < windowMax) right++

  return right - left + 1;
}

console.log(minWindow([1, 2, 5, 3, 7, 10, 9, 12]))
console.log(minWindow([1, 3, 2, 0, -1, 7, 10]))
console.log(minWindow([1, 2, 3]))