export const scan = function (arr) {
  const result = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i]
    result.push(result[i - 1] + element)
  }
  return result
}
