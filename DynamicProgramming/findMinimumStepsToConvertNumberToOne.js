/*
Given an Integer `N`, find minimum number of steps needs to make it 1
if N is divisible by 2 then you can divide it by 2 
if N is divisible by 3 then you can divide it by 3
else you can decrement

example 
10
  10 -> 9 -> 3 -> 1 : 4 steps
  or 
  10 -> 5 -> 4 -> 2 -> 1 : 5 steps
*/

const findMinTopDown = (n) => {
  const memo = {}
  const f = (n) => {
    let r
    if (memo[n]) return memo[n]
    if (n == 1) r = 0
    else {
      let dec, byTwo, byThree
      dec = 1 + f(n - 1)
      byTwo = n % 2 == 0 ? 1 + f(n / 2) : Infinity
      byThree = n % 3 == 0 ? 1 + f(n / 3) : Infinity
      r = Math.min(dec, byTwo, byThree)
    }
    memo[n] = r
    return r
  }
  return f(n)
}

const findMin_ = (n) => {
  const dp = []
}
findMinTopDown(2000)
