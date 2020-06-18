// given arr of house with some values, you can't rob neighbour houses. Find the max possible profit -
var rob = function (arr) {
  const memo = {}
  const f = (n) => {
    let r
    if (memo[n]) return memo[n]
    if (n < 0) r = 0
    else {
      const takeCurrent = f(n - 2) + arr[n]
      const skipCurrent = f(n - 1)
      r = Math.max(takeCurrent, skipCurrent)
    }
    memo[n] = r
    return r
  }

  return f(arr.length - 1)
}

rob([3, 0, 1, 3])
