/* 
Problem -
Given two strings s1 and s2, and three operations Insert, Remove, Replace. Find minimum number of operations required to convert str1 to str2


Algorithm -
* Starting from right, 
  * if the right most characters s1[n] and s2[n] are same then we need to process s1[0,n-1] and s2[0,n-1]
  * if they are not same 
    * We may delete character of s1 and process s1[0,n-1] and s2[0,n]
    * We may replace character of s1 with character of s2 and process s1[0,n-1] and s2[0,n-1]
    * We may insert character of s2 at the end of s1, after insert the last characters become same so we process s1[0,n-1] and s2[0,n-1]
* Recurrence relation -       same                                        replace
  * f(n,m) = s1[n] == s2[m] ? f(n-1, m-1) : 1 + min(f(n,m-1), f(n-1,m), f(n-1, m-1))  
* Terminating conditions -
  * if n == 0 we reached end of 1st string thus return m and vice versa  
  
*/
const editDistance = (s1, s2) => {
  if (s1.length == 0) return s2.length
  if (s2.length == 0) return s1.length

  const memo = Array(s1.length)
    .fill(0)
    .map((_) => Array(s2.length).fill(0))
  const f = (n, m) => {
    if (memo[n][m]) return memo[n][m]

    let r
    if (n == 0) {
      r = m
    } else if (m == 0) {
      r = n
    } else if (s1[n] == s2[m]) {
      // if same we do nothing and just process rest of strings
      r = f(n - 1, m - 1)
    } else {
      // else we take minimum from insert, remove, delete
      const insert = 1 + f(n, m - 1)
      const remove = 1 + f(n - 1, m)
      const update = 1 + f(n - 1, m - 1)

      r = Math.min(insert, remove, update)
    }

    memo[n][m] = r
    return r
  }

  return f(s1.length - 1, s2.length - 1)
}

console.log(editDistance('sunday', 'saturday'))
