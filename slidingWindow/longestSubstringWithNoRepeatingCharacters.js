/* 
Given a string, find the length of the longest substring which has no repeating characters. 

Algortihm -
* Brute Force 
  Just get all substrings, filter out substrings without repeating characters, just return the longest
* Dynamic Sliding Window
  * First, we will insert characters from the beginning of the string until we have ‘K’ distinct characters in the HashMap.
  * These characters will constitute our sliding window. We are asked to find the longest such window having no more than ‘K’ distinct characters. We will remember the length of this window as the longest window so far.
  * After this, we will keep adding one character in the sliding window (i.e. slide the window ahead), in a stepwise fashion.
  * In each step, we will try to shrink the window from the beginning if the count of distinct characters in the HashMap is larger than ‘K’. We will shrink the window until we have no more than ‘K’ distinct characters in the HashMap. This is needed as we intend to find the longest window.
  * While shrinking, we’ll decrement the frequency of the character going out of the window and remove it from the HashMap if its frequency becomes zero.
  * At the end of each step, we’ll check if the current window length is the longest so far, and if so, remember its length.
*/

const nonRepeatSubstring = (S, k) => {
  let start = 0
  let charMap = {}
  let maxLength = 0

  for (let end = 0; end < S.length; end++) {
    const currentElement = S[end]

    // if we see element again, then we reset the start pointer, so we always have string with non repeating elements
    if (currentElement in charMap) start = Math.max(start, charMap[currentElement] + 1)
    
    charMap[currentElement] = end

    maxLength = Math.max(maxLength, end - start + 1)
  }

  return maxLength
}

console.log(nonRepeatSubstring('aabccbb'))
console.log(nonRepeatSubstring('abbbb'))
console.log(nonRepeatSubstring('abccde'))
console.log(nonRepeatSubstring('aaaaa'))
console.log(nonRepeatSubstring('abcdeabc'))
