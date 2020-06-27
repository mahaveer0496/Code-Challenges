/*
Given a string, find the length of longest palindromic subsequence
A subsequence is a sequence of characters in the same relative order as they appear in original string

e.g -
s = bbabcbcab
longestPalindromicSubsequence = babcbab = 7


Algorithm - 
* We compare 1st and last elements, 
  * if they're same we process string except those elements, and add 2 to the result, cuz these elements are part of longest palindromic subsequence
  * else we process string except 1st element and we process string except last letter and then take the max of those  
* Recurrence relation -
  * f(start, end) = s[start]==s[end] ? 2+f(start+1, end-1) : max(f(start,end-1), f(start-1,end)) 💡 this is pretty similar to longestCommonSubsequence
* Terminating conditions -
  * if start > end the two cursors crossed, thus we return 0
  * if start == end, string of length 1 is palindromic, return 1
*/

const longestPalindromicSubsequence = (s) => {
  const f = (start, end) => {
    if (start > end) return 0
    if (start == end) return 1
    if (s[start] == s[end]) return 2 + f(start + 1, end - 1)
    return Math.max(f(start + 1, end), f(start, end - 1))
  }
  return f(0, s.length - 1)
}

console.log(longestPalindromicSubsequence('bbabcbcab'))
