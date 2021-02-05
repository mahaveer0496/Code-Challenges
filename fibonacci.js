const fibRecursive = (n) => {
  const f = (n) => {
    if (n < 2) return 1
    return f(n - 1) + f(n - 2)
  }
  return f(n)
}

const fibRecursiveMemo = (n) => {
  const memo = {}
  const f = (n) => {
    if (n < 2) return 1

    if (n in memo) return memo[n]
    memo[n] = f(n - 1) + f(n - 2)
    return memo[n]
  }
  return f(n)
}

const fibIter = (n) => {
  const result = [1, 1]

  for (let i = 2; i <= n; i++) {
    const nextFib = result[0] + result[1]
    result[0] = result[1]
    result[1] = nextFib
  }

  return result
}

// console.log(fibRecursive(54))
console.log(fibRecursiveMemo(54))
console.log(fibIter(54))
