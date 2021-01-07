/*
Given a string with lowercase letters only, if you are allowed to replace no more than 'k' letters with any letter, find the length of the longest substring having the same letters after replacement.

E.g -
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
*/

const getLongestSubstring = (S, k) => {
  let start = 0
  let maxRepeatLetterCount = 0
  let maxLength = 0
  const frequencyMap = {}

  for (let end = 0; end < S.length; end++) {
    const rightChar = S[end]

    if (!(rightChar in frequencyMap)) frequencyMap[rightChar] = 1
    else frequencyMap[rightChar]++

    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar])

    if (end - start + 1 - maxRepeatLetterCount > k) {
      frequencyMap[S[start]]--
      start++
    }

    maxLength = Math.max(maxLength, end - start + 1)
  }
  
  return maxLength
}

console.log(getLongestSubstring('aabccbb', 2))
console.log(getLongestSubstring('abbcb', 1))
console.log(getLongestSubstring('abccde', 1))