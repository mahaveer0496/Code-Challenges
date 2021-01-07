/* 
Given a string, find the length of the longest substring in it with no more than K distinct characters.
*/


/*
  Just get all substrings, count how many characters substring contains, filter if count <= k, return the longest
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


/* 
  * Create an object map for keeping track of characters, as window is expanded, increment count for that character
  * Once the character count object > `k` keys, we've violated the condition for `upto k` characters, so we have to shrink the window _untill_ we are satisfying the condition again and hence while loop is used
  * While shriking window, we decrement count of the character going out of the window, if any character becomes 0 we remove it from object so we know for sure its not in current window.
  * maxLength at any point is max of itself or windowSize    
*/
const longestSubstringWithKDistinctCharactersDynamicWindow = (s, k) => {
  let windowStart = 0
  let maxLength = 0
  let charFrequency = {}

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const rightChar = s[windowEnd]
    if (!(rightChar in charFrequency)) charFrequency[rightChar] = 0
    charFrequency[rightChar]++

    while (Object.keys(charFrequency).length > k) {
      const leftChar = s[windowStart]
      charFrequency[leftChar]--
      if (charFrequency[leftChar] == 0) delete charFrequency[leftChar]
      windowStart++
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxSubstring
}



console.log(longestSubstringWithKDistinctCharactersBruteForce('araaci', 2))
console.log(longestSubstringWithKDistinctCharactersDynamicWindow('araaci', 2))

