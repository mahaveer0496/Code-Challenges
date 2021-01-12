/* 
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.
*/

const dutchNationalFlag1 = (A) => {
  return A.sort()
}

const dutchNationalFlag2 = (A) => {
  const zeros = []
  const ones = []
  const twos = []
  A.forEach(x => {
    if (x === 0) zeros.push(x)
    if (x === 1) ones.push(x)
    if (x === 2) twos.push(x)
  })
  return [...zeros, ...ones, ...twos]
}

/* count no of 0s, 1s and 2s and then mutate the array with that many 0s, 1s, and 2s */
const dutchNationalFlag3 = (A) => {
  let n0 = 0
  let n1 = 0
  let n2 = 0

  A.forEach(x => {
    if (x === 0) n0++
    if (x === 1) n1++
    if (x === 2) n2++
  })

  let i = 0

  while (n0 > 0) {
    A[i] = 0
    n0--
    i++
  }

  while (n1 > 0) {
    A[i] = 1
    n1--
    i++
  }

  while (n2 > 0) {
    A[i] = 2
    n2--
    i++
  }

  return A
}

const dutchNationalFlag4 = (A) => {
  let low = 0
  let high = A.length - 1
  let i = 0
  while (i <= high) {
    if (A[i] === 0) {
      [A[i], A[low]] = [A[low], A[i]]
      i++
      low++
    } else if (A[i] === 1) {
      i++
    } else {
      [A[i], A[high]] = [A[high], A[i]]
      high--
    }
  }
  return A
}


console.log(dutchNationalFlag1([1, 0, 2, 2, 1, 0]))
console.log(dutchNationalFlag2([1, 0, 2, 2, 1, 0]))
console.log(dutchNationalFlag3([1, 0, 2, 2, 1, 0]))
console.log(dutchNationalFlag4([1, 0, 2, 2, 1, 0]))