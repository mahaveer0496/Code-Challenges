console.clear()

/**
time - O(2^n * n)
space - O(2^n * n)
*/
const uniqueAbbrs1 = (S) => {
  const result = []
  for (let i = 0; i <= Math.pow(2, S.length) - 1; i++) {
    const binaryNumber = i.toString(2).padStart(S.length, 0)
    const subResult = []

    for (let j = 0; j < binaryNumber.length; j++) {
      if (binaryNumber[j] == 1) {
        subResult.push(1)
      } else {
        subResult.push(S[j])
      }
    }

    result.push(subResult)
  }

  return result.map(condenseString).join(', ')
}

/* 
S = B11C2A111 -> B2C2A3
*/
function condenseString(S) {
  const result = []

  let i = 0
  while (i < S.length) {
    let runningSum = 0

    while (/\d/.test(S[i])) {
      runningSum += +S[i]
      i++
    }

    if (runningSum == 0) {
      result.push(S[i])
      i++
    } else {
      result.push(runningSum)
    }
  }

  return result.join('')
}

console.log(uniqueAbbrs1('CODE'))
