const pascalsTriangle = (n) => {
  if (n <= 0) return []
  if (n == 1) return [1]
  if (n == 2) return [1, 1]

  let result = [1, 1]

  for (let i = 2; i < n; i++) {
    const prevRow = result
    const newRow = Array(prevRow.length + 1).fill(1)

    for (let i = 1; i < newRow.length - 1; i++) {
      newRow[i] = prevRow[i - 1] + prevRow[i]
    }

    result = newRow
  }

  return result
}

console.log(
  [...'aacdbbca']
    .filter((x) => x != 'b')
    .map((x) => (x == 'a' ? ['d', 'd'] : [x]))
    .flat()
    .join(''),
)
console.log(pascalsTriangle(5))
