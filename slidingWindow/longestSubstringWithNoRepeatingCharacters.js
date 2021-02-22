const { clear } = require('console')

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
clear()
const nonRepeatSubstringTricky = (S) => {
  let start = 0
  let charMap = {}
  let maxLength = 0

  for (let end = 0; end < S.length; end++) {
    const currentElement = S[end]

    // if we see element again, then we reset the start pointer, so we always have string with non repeating elements
    /* 
    So i was thinking that whenever we see the character again we update left to _last index of repeating character + 1_ but doing just that doesnt always give correct answer cuz last index may be very behind.

    So one option is to increment left by one and at each step see if condition of distinct elements is being followed.
    
    `Math.max` step is needed cuz left _may_ be already ahead of _last index of rightChar_
    e.x - a b c a a b c d b a
          0 1 2 3 4 5 6 7 8 9
    - when we see `a` at `3` last index of `a` was 0, we update left to `1`
    - when we see `a` at 4 last index of `a` was 3, we update left to `4`
    - but, when we see `b` at 5, left is at `4` _but_ last index of `b` was 1 so if we just took _last index of b + 1_ we'll get incorrect substring, so, we take max of both
    */
    if (currentElement in charMap)
      start = Math.max(start, charMap[currentElement] + 1)

    charMap[currentElement] = end

    maxLength = Math.max(maxLength, end - start + 1)
  }

  return maxLength
}

const nonRepeatSubstringSimpler = (S) => {
  let start = 0
  let charMap = {}
  let maxLength = 0

  for (let end = 0; end < S.length; end++) {
    const currentElement = S[end]

    while (charMap[currentElement]) {
      charMap[S[start]] = false
      start++
    }

    charMap[currentElement] = true

    maxLength = Math.max(maxLength, end - start + 1)
  }

  return maxLength
}

console.log(nonRepeatSubstringSimpler('aabccbb'))
console.log(nonRepeatSubstringTricky('aabccbb'))
console.log(nonRepeatSubstringSimpler('abbbb'))
console.log(nonRepeatSubstringTricky('abbbb'))
console.log(nonRepeatSubstringSimpler('abccde'))
console.log(nonRepeatSubstringTricky('abccde'))
console.log(nonRepeatSubstringSimpler('aaaaa'))
console.log(nonRepeatSubstringTricky('aaaaa'))
console.log(nonRepeatSubstringSimpler('aabcadeabc'))
console.log(nonRepeatSubstringTricky('aabcadeabc'))
