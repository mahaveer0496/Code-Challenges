const generateAllPermutations = (A) => {
  const allPermutations = []
  const f = (a, l, r) => {
    if (l == r) allPermutations.push([...a])
    else
      for (let i = l; i < r + 1; i++) {
        ;[a[l], a[i]] = [a[i], a[l]]
        f(a, l + 1, r)
        ;[a[l], a[i]] = [a[i], a[l]]
      }
  }

  f(A, 0, A.length - 1)
  return allPermutations
}

const generateAllPermutationsEasierSolution = (A) => {
  const permutations = []
  const f = (A, currentPermutation) => {
    if (A.length == 0) permutations.push([...currentPermutation])
    else {
      for (let i = 0; i < A.length; i++) {
        currentPermutation.push(A[i])
        f(
          A.filter((el) => el != A[i]),
          currentPermutation,
        )
        currentPermutation.pop()
      }
    }
  }

  f(A, [])
  return permutations
}

const generateAllPermutationsBFS = (A) => {
  const permutations = [[]]
  const result = []
  for (let i = 0; i < A.length; i++) {
    const currentElement = A[i]
    const n = permutations.length
    for (let p = 0; p < n; p++) {
      const oldPermutations = permutations.shift()
      for (let j = 0; j < oldPermutations.length + 1; j++) {
        const newPermutation = [...oldPermutations]
        newPermutation.splice(j, 0, currentElement)
        if (newPermutation.length == A.length) {
          result.push(newPermutation)
        } else {
          permutations.push(newPermutation)
        }
      }
    }
  }
  return result
}

// console.log(generateAllPermutations(['A', 'B', 'C']))
// console.log(generateAllPermutationsEasierSolution(['A', 'B', 'C']))
console.log(generateAllPermutationsBFS(['A', 'B', 'C']))
