import { clear, log } from 'console'
import areObjectsEqual from '../utils/areObjectsEqual'
import getFMap from '../utils/getFMap'

clear()
const hasPermutation = (S, p) => {
  let start = 0
  const fMap = getFMap(p)
  let matched = 0
  let toMatch = Object.keys(fMap).length

  for (let end = 0; end < S.length; end++) {
    const currentElement = S[end]

    if (currentElement in fMap) {
      fMap[currentElement]--
      if (fMap[currentElement] === 0) {
        matched++
      }
    }

    if (matched === toMatch) {
      return true
    }

    if (end >= p.length - 1) {
      const leftElement = S[start]
      start++

      if (leftElement in fMap) {
        if (fMap[leftElement] === 0) {
          matched--
        }
        fMap[leftElement]++
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
const hasPermutation2 = (S, P) => {
  const fMap = getFMap(P)
  const windowMap = getFMap(S.slice(0, P.length))

  for (let i = P.length; i < S.length; i++) {
    const rightChar = S[i]
    const leftChar = S[i - P.length]

    windowMap[leftChar]--
    if (windowMap[leftChar] === 0) {
      delete windowMap[leftChar]
    }

    if (rightChar in windowMap) {
      windowMap[rightChar]++
    } else {
      windowMap[rightChar] = 1
    }

    if (areObjectsEqual(windowMap, fMap)) return true
  }
  return false
}

console.log(hasPermutation('oidbcaf', 'abc'))
console.log(hasPermutation2('oidbcaf', 'abc'))
console.log(hasPermutation('odicf', 'dc'))
console.log(hasPermutation2('odicf', 'dc'))
console.log(hasPermutation('adbbcafa', 'abcb'))
console.log(hasPermutation2('adbbcafa', 'abcb'))
