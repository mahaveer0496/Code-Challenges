/* 
Given a 2D array dimensions, nxm, find total number of paths from top-left to bottom-right if we can move right and down only.


Note - 
This is very similar to minCostToReachBottomRightCornerInMatrix


Algorithm - 
* We start from bottom-right and count number of ways to reach the cell above it and cell left of it
* Recurrence relation -
  * f(n,m) = f(n, m-1) + f(n-1,m)
* Terminating conditions -
  * There are 2 possible terminations
    * Similar to minCostToReachBottomRightCornerInMatrix,
      * If we reach 0,0 that's 1 path
      * If we reach 1st row, we go left, till 0,0 and then return 1
      * If we reach 1st col, we go up, till 0,0 and then return 1
    * Or - 
      * we can say, to reach 0,0 there are 0 ways
      * to reach 1st row i.e n == 0 there is only 1 way, go right from 0,0
      * to reach 1st col i.e m == 0 there is only 1 way, go down from 0,0 
*/

const totalPathCount = (n, m) => {
  const f = (i, j) => {
    // TODO: Find why i returned 1 for i=0, j=0
    if (i == 0 && j == 0) return 1
    if (i == 0) return f(i, j - 1)
    if (j == 0) return f(i - 1, j)
    return f(i - 1, j) + f(i, j - 1)
  }
  return f(n - 1, m - 1)
}

const totalPathCount2 = (n, m) => {
  const f = (i, j) => {
    if (i == 0 && j == 0) return 0
    if (i == 0) return 1
    if (j == 0) return 1
    return f(i - 1, j) + f(i, j - 1)
  }
  return f(n - 1, m - 1)
}

const totalPathCountWithDiagonal = (n, m) => {
  const f = (i, j) => {
    if (i == 0 && j == 0) return 1
    if (i == 0) return f(i, j - 1)
    if (j == 0) return f(i - 1, j)
    return f(i - 1, j) + f(i, j - 1) + f(i - 1, j - 1)
  }
  return f(n - 1, m - 1)
}
// console.log(totalPathCount(2, 2))
console.log(totalPathCount(5, 4))
console.log(totalPathCount2(5, 4))
console.log(totalPathCountWithDiagonal(3, 3))
