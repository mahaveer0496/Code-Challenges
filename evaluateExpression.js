const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const evaluateExpression = (expression) => {
  const f = (S) => {
    const result = []
    if (!S.includes('+') && !S.includes('-') && !S.includes('*')) {
      result.push(parseInt(S))
    } else {
      for (let i = 0; i < S.length; i++) {
        const char = S[i]
        if (+char != +char) {
          const leftParts = f(S.substring(0, i))
          const rightParts = f(S.substring(i + 1))
          for (let l = 0; l < leftParts.length; l++) {
            for (let r = 0; r < rightParts.length; r++) {
              const part1 = +leftParts[l]
              const part2 = +rightParts[r]
              result.push(operations[char](part1, part2))
            }
          }
        }
      }
    }
    return result
  }

  return f(expression)
}

console.log(evaluateExpression('2*3-4-5*2'))
