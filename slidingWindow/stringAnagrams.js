/* 
Given a string and a pattern, find all anagrams of the pattern in the given string.
*/

import { log } from 'console'
import areObjectsEqual from '../utils/areObjectsEqual'
import getFMap from '../utils/getFMap'

const stringAnagram = (S, P) => {
  const fMap = getFMap(P)
  const windowMap = getFMap(S.slice(0, P.length))
  const result = []

  for (let i = P.length; i < S.length; i++) {
    const leftChar = S[i - P.length]
    const rightChar = S[i]

    windowMap[leftChar]--
    if (windowMap[leftChar] === 0) {
      delete windowMap[leftChar]
    }

    if (rightChar in windowMap) {
      windowMap[rightChar]++
    } else {
      windowMap[rightChar] = 1
    }

    if (areObjectsEqual(fMap, windowMap)) {
      result.push(i - P.length + 1)
    }
  }
  return result.map((i) => S.slice(i, P.length + i))
}

log(stringAnagram('ppqp', 'pq'))
log(stringAnagram('abbcabc', 'abc'))
