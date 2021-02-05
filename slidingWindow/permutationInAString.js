const hasPermutation = (S, p) => {
  let start = 0
  const charFrequency = {}
  let matched = 0

  for (const el of p) {
    if (charFrequency[el]) charFrequency[el]++
    else charFrequency[el] = 1
  }

  const uniqueCharactersInFrequencyMap = Object.keys(charFrequency).length
  for (let end = 0; end < S.length; end++) {
    const currentElement = S[end]

    if (currentElement in charFrequency) {
      charFrequency[currentElement]--
      if (charFrequency[currentElement] === 0) {
        matched + 1
      }
    }

    if (matched === uniqueCharactersInFrequencyMap) {
      return true
    }

    if (end >= p.length - 1) {
      const leftChar = S[start]
      start++
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched--
        }
        charFrequency[leftChar]++
      }
    }
  }
  return false
}

/**
 * We need a window of size s2.length cuz thats how long the substring in s1 can be
 * We slide the window, and in frequencyMap we increment the frequency of incoming character, and decrement the frequency of outgoing character
 * In each window if the current frequencyMap becomes the same as frequencyMap of current window's characters then we've found a match.
 */
const hasPermutation2 = (s1, s2) => {
  const fMap1 = getFMap(s1)
  const fMap2 = getFMap(s2)

  for (let i = s2.length; i < s1.length; i++) {
    const currentElement = s1[i]
    fMap2[currentElement]++
    fMap2[s1[i - s2.length - 1]]--
    console.log(fMap2)
  }
  return false
}

function getFMap(s) {
  const obj = {}
  for (const x of s) {
    if (obj[x]) obj[x]++
    else obj[x] = 1
  }
  return obj
}

const hasPermutation3 = (S, P) => {
  let start = 0
  let fMap = getFMap(P)
fMap
  for (let end = 0; end < S.length; end++) {
    const currentElement = S[end]
    if (currentElement in fMap) {
      if(fMap[currentElement]===0){
        delete fMap[currentElement]
      } else {
        fMap[currentElement]--
        if (end - start + 1 == P.length) return true
      }      
    } else {
      fMap = getFMap(P)
      start = end
    }
  }
  return false
}

// console.log(hasPermutation2('oidbcaf', 'abc'))
console.log(hasPermutation2('odicf', 'dc'))
console.log(hasPermutation2('oidbcaf', 'abc'))
