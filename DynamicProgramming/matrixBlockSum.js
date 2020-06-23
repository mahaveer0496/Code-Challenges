/*
Given a m * n matrix mat and an integer K, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for i - K <= r <= i + K, j - K <= c <= j + K, and (r, c) is a valid position in the matrix.

Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
Output: [[12,21,16],[27,45,33],[24,39,28]]

Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2
Output: [[45,45,45],[45,45,45],[45,45,45]]


Algorithm -
this is based on prefixSum, in a matrix generate prefix sum of rows (cummulativeRowsMatrix) 
and then prefix sum of columns in cummulativeRowsMatrix, 
then final cummulativeMatrix[i,j] gives sum of sub matrixmatrix[0,0] -> matrix[i,j]

Example 
[
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
]

generating prefix sum column wise
cummulativeRowsMatrix = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]

generating prefix sum column wise
cummulativeMatrix = [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9],
]

Formula -
Sum(0, 0, i, j) = cummulativeMatrix[i,j]
Sum(a, b, i,j) = Sum(0, 0, i, j) - Sum(0, 0, i, j-1) - Sum(0, 0, i-1, j) + Sum(0, 0, a, b) = cummulativeMatrix[i,j] - cummulativeMatrix[i][j-1] - cummulativeMatrix[i]

https://leetcode.com/problems/matrix-block-sum/discuss/482730/Python-O(-m*n-)-sol.-by-integral-image-technique.-90%2B-with-Explanation
*/

// const { scan } = require('./../utils/scan')
var matrixBlockSum = function (matrix, K) {
  const auxMatrix = [...matrix.map((row) => [...row])]
  const row = auxMatrix.length
  const col = auxMatrix[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 1; j < col; j++) auxMatrix[i][j] += auxMatrix[i][j - 1]
  }
  for (let j = 0; j < col; j++) {
    for (let i = 1; i < row; i++) auxMatrix[i][j] += auxMatrix[i - 1][j]
  }
  for (let i = 0; i < auxMatrix.length; i++) {
    for (let j = 0; j < auxMatrix[0].length; j++) {
      const r1 = Math.max(0, i - K)
      const r2 = Math.min(auxMatrix.length - 1, i + K)
      const c1 = Math.max(0, j - K)
      const c2 = Math.min(auxMatrix[0].length - 1, j + K)

      mat[i][j] =
        auxMatrix[r2 + 1][c2 + 1] -
        auxMatrix[r1][c2 + 1] -
        auxMatrix[r2 + 1][c1] +
        auxMatrix[r1][c1]
    }
  }
  console.log(auxMatrix)
}

console.log(
  matrixBlockSum([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]),
)
