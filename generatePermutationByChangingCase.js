const generatePermutationByChangingCase = (S) => {
  const permutations = [S]
  for (let i = 0; i < S.length; i++) {
    // skip if currentElement is not an alphabet
    if (+S[i] === +S[i]) continue

    const n = permutations.length
    for (let j = 0; j < n; j++) {
      const characters = permutations[j].split('')
      characters
      if (characters[i] === characters[i].toLowerCase()) {
        characters[i] = characters[i].toUpperCase()
      } else {
        characters[i] = characters[i].toLowerCase()
      }
      permutations.push(characters.join(''))
    }
  }
  return permutations
}

console.log(generatePermutationByChangingCase('ab7c'))
