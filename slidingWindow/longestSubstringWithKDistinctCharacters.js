/* 
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Algortihm -
* Brute Force 
  Just get all substrings, count how many characters substring contains, filter if count <= k, return the longest
* Dynamic Sliding Window
  * First, we will insert characters from the beginning of the string until we have ‘K’ distinct characters in the HashMap.
  * These characters will constitute our sliding window. We are asked to find the longest such window having no more than ‘K’ distinct characters. We will remember the length of this window as the longest window so far.
  * After this, we will keep adding one character in the sliding window (i.e. slide the window ahead), in a stepwise fashion.
  * In each step, we will try to shrink the window from the beginning if the count of distinct characters in the HashMap is larger than ‘K’. We will shrink the window until we have no more than ‘K’ distinct characters in the HashMap. This is needed as we intend to find the longest window.
  * While shrinking, we’ll decrement the frequency of the character going out of the window and remove it from the HashMap if its frequency becomes zero.
  * At the end of each step, we’ll check if the current window length is the longest so far, and if so, remember its length.
*/

const longestSubstringWithKDistinctCharactersBruteForce = (s, k) => {
  const allSubStrings = []
  const n = s.length

  // Get all possible substrings
  for (let k = 1; k <= n; k++) {
    for (let i = 0; i < n - k + 1; i++) {
      let subString = ''
      for (let j = i; j < k + i; j++) {
        subString += s[j]
      }
      allSubStrings.push(subString)
    }
  }

  const stringsWithAtmostKDistinctCharacters = []
  let maxSubstring = ''

  allSubStrings.forEach((currentSubstring) => {
    const map = {}

    // for each substring count characters
    currentSubstring.split('').forEach((s) => {
      if (map[s]) map[s]++
      else map[s] = 1
    })

    // if distinct characters <= k update maxSubstring
    if (Object.keys(map).length <= k) {
      stringsWithAtmostKDistinctCharacters.push(currentSubstring)
      if (currentSubstring.length > maxSubstring.length)
        maxSubstring = currentSubstring
    }
  })

  return maxSubstring
}

const longestSubstringWithKDistinctCharactersDynamicWindow = (s, k) => {
  let windowStart = 0
  let maxLength = 0
  let maxSubstring = ''
  let charFrequency = {}

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd]

    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0
    }
    charFrequency[rightChar] += 1

    while (Object.keys(charFrequency).length > k) {
      const leftChar = s[windowStart]
      charFrequency[leftChar] -= 1
      if (charFrequency[leftChar] == 0) {
        delete charFrequency[leftChar]
      }
      windowStart += 1
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    if (windowEnd - windowStart + 1 > maxSubstring.length)
      maxSubstring = s.slice(windowStart, windowEnd + 1)
  }
  return maxSubstring
}

console.log(longestSubstringWithKDistinctCharactersBruteForce('araaci', 2))
console.log(longestSubstringWithKDistinctCharactersDynamicWindow('araaci', 2))
