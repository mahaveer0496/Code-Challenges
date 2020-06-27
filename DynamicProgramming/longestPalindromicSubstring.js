/*
Given a string, find the length of its Longest Palindromic Substring (LPS). In a palindromic string, elements read the same backward and forward.

e.g -
s = bbabcbcab
longestPalindromicSubstring = bab = 3


Algorithm - 
* We compare 1st and last elements,
  * check if remaining string is also palindromic, if it is retrun 2 + remainingLength  
  * else we process string except 1st element and we process string except last letter and then take the max of those  
* Recurrence relation -
  * f(start, end) = s[start]==s[end] ? remainingLength == f(start + 1, end -1) ? remainingLength + 1 : max(f(start + 1, end), f(start, end - 1))    
* Terminating conditions -
  * if start > end the two cursors crossed, thus we return 0
  * if start == end, we processed everything  
*/

const longestPalindromicSubstring = (s) => {
  const f = (start, end) => {
    if (start > end) return 0
    if (start == end) return 1
    if (s[start] == s[end]) {
      const remainingLength = end - start - 1
      if (remainingLength == f(start + 1, end - 1)) {
        return 2 + remainingLength
      }
    }
    return Math.max(f(start + 1, end), f(start, end - 1))
  }
  return f(0, s.length - 1)
}

console.log(longestPalindromicSubstring('bbabcbcab'))
