const generatePowerSetWithRepeatedElementsBFS = (A) => {
  A.sort()

  const powerSet = [[]]
  let startIndex = 0
  let endIndex = 0
  for (let i = 0; i < A.length; i++) {
    startIndex = 0
    if (i > 0 && A[i] === A[i - 1]) {
      startIndex = endIndex + 1
    }

    endIndex = powerSet.length - 1
    const currentElement = A[i]
    for (let j = startIndex; j < endIndex + 1; j++) {
      const set = [...powerSet[j]]
      set.push(currentElement)
      powerSet.push(set)
    }
  }
  return powerSet
}
console.log(generatePowerSetWithRepeatedElementsBFS([1, 2, 3, 3]))
