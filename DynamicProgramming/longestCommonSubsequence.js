/*
Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

Example 1:
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.


Note -
This problem is similar to edit distance


Algorithm - 
* We start from end
  * If last characters of s1 and s2 are same then thats part of LCS, thus we process s1[n-1] and s2[n-1]
  * Else 
    * Remove 1 character from s1 and process new s1 with s2
    * Remove 1 character from s2 and process new s2 with s1
* Recurrence relation -
  * f(n,m) = s1[n]==s2[m] ? 1+f(n-1, m-1) : max(f(n,m-1), f(n-1,m))
* Terminating conditions -
  * if n == 0 and m != 0 then 1st string is empty and 2nd is not, so, return 0 as there is nothing common in empty and non empty strings
  * if n != 0 and m == 0 same thing
*/

const longestCommonSubsequence = (s1, s2) => {
  const f = (m, n) => {
    if (m < 0 || n < 0) return 0
    if (s1[m] == s2[n]) return 1 + f(m - 1, n - 1)
    return Math.max(f(m, n - 1), f(m - 1, n))
  }
  return f(s1.length - 1, s2.length - 1)
}

console.log(longestCommonSubsequence('abdca', 'cbda'))
