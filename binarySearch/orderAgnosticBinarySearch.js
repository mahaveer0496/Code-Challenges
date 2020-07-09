/*  Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.


Algortithm - 
* compare 1st and last elements to see if its ascending or descending order
* follow binary search algorightm
  * if ascending
    * if key < A[mid] 
    * search in A[0:mid]
    * else search in A[mid+1]
  * if descending
    * if key < A[mid]
    * search in A[mid+1]
    * else search in A[0, mid] 
 */

const { default: binarySearch } = require('./binarySearch')

const orderAgnosticSearch = (A, key) => {
  const isAscending = A[0] < A[A.length - 1]
  return binarySearch(A, key, isAscending)
}

console.log(orderAgnosticSearch([4, 6, 10], 10))
console.log(orderAgnosticSearch([1, 2, 3, 4, 5, 6, 7], 5))
console.log(orderAgnosticSearch([10, 6, 4], 10))
console.log(orderAgnosticSearch([10, 6, 4], 4))
