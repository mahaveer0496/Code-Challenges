/* 
Your input is an array of integers, and you have to reorder its entries so that the even entries appear first. This is easy if you use O(n) space, where n is the length of the array. However, you are required to solve it without allocating additional storage. 
*/

function evenOdd(A) {
  let nextEven = 0
  let nextOdd = A.length - 1

  while (nextEven < nextOdd) {
    if (A[nextEven] % 2 == 0) {
      nextEven++
    } else {
      ;[A[nextEven], A[nextOdd]] = [A[nextOdd], A[nextEven]]
      nextOdd--
    }
  }
  return A
}

console.log(evenOdd([1, 4, 3, 2]))
