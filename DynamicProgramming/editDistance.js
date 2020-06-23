const editDistance = (s1, s2) => {
  if (s1.length == 0) return s2.length
  if (s2.length == 0) return s1.length

  const f = (n, m) => {
    if (n == 0) {
      return m
    }
    if (m == 0) {
      return n
    }
    if (s1[n] == s2[m]) {
      return f(n - 1, m - 1)
    }
    return 1 + Math.min(f(n, m - 1), f(n - 1, m), f(n - 1, m - 1))
  }
  return f(s1.length - 1, s2.length - 1)
}

console.log(editDistance('bac', 'baa'))
