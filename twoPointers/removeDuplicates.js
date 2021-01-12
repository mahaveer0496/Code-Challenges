/*
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after `removing the duplicates in-place` return the length of the subarray that has no duplicate in it.

Example -
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

*/


/*
 * In this problem, we need to remove the duplicates in-place such that the resultant length of the array remains sorted. As the input array is sorted, therefore, one way to do this is to shift the elements left whenever we encounter duplicates. In other words, we will keep one pointer for iterating the array and one pointer for placing the next non-duplicate number. So our algorithm will be to iterate the array and whenever we see a non-duplicate number we move it next to the last non-duplicate number we’ve seen.
 * 
 * Note - We dont care about preserving elements, after push non duplicates left and we just need to return length upto filtered array, rest of the array can be a mess.
 */

const removeDuplicates = (A) => {
  let nextNonDuplicate = 1

  for (let i = 1; i < A.length; i++) {
    if (A[i] !== A[nextNonDuplicate - 1]) {
      A[nextNonDuplicate] = A[i]
      nextNonDuplicate++
    }
  }

  return nextNonDuplicate
}


console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]))
