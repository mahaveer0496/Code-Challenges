// const generateValidParenthesis = (n) => {
//   const allParens = []
//   const f = (str, leftParens, rightParens) => {
//     if (str.length === n * 2) allParens.push(str)
//     else {
//       if (leftParens < n) f(str + '(', leftParens + 1, rightParens)
//       if (rightParens < leftParens) f(str + ')', leftParens, rightParens + 1)
//     }
//   }
//   f('', 0, 0)
//   return allParens
// }

const generateValidParenthesis = (n) => {
  const allParens = []
  const f = (arr, leftParens, rightParens) => {
    if (arr.length === n * 2) allParens.push([...arr])
    else {
      if (leftParens < n) {
        arr.push('(')
        f(arr, leftParens + 1, rightParens)
        arr.pop()
      }
      if (rightParens < leftParens) {
        arr.push(')')
        f(arr, leftParens, rightParens + 1)
        arr.pop()
      }
    }
  }
  f([], 0, 0)
  return allParens.map((p) => p.join(''))
}

console.log(generateValidParenthesis(3))
