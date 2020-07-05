/* 
Problem -
Given m*n matrix with m[i][j] = cost of that cell, find min cost to reach bottom right corner,
when you can only go right or down


Algorithm - 
* Since we can only go right or down. To reach last cell m[m][n], we must've gone through either m[m-1][n] or m[m][n-1]
* Recurrence relation -
  * f(m,n) = min(f(m,n-1), f(m, n-1))
  * Starting from last cell, we recursively compute cost to reach (m,n-1) and (m-1,n) cells and take their minimum
* Terminating conditions -
  * If m == 0 and n == 0 we reached the first cell
  * If m == 0 and n != 0 we reached first row, from here we can only go left
  * If m != 0 and n == 0 we reached first col, from here we can only go up
*/

const minCostToReachBottomRightCornerInMatrix = (arr) => {
  const rows = arr.length
  const cols = arr[0].length
  const memo = Array(rows)
    .fill(0)
    .map((_) => Array(cols).fill(0))

  const f = (i, j) => {
    let r
    if (memo[i][j]) return memo[i][j]

    if (i == 0 && j == 0) r = arr[0][0]
    else if (i == 0) r = f(i, j - 1) + arr[i][j]
    else if (j == 0) r = f(i - 1, j) + arr[i][j]
    else
      r =
        arr[i][j] +
        Math.min(
          f(i, j - 1),
          f(i - 1, j),
          /*if diagonal movement is allowed - f(i - 1, j - 1) */
        )
    memo[i][j] = r
    return memo[i][j]
  }

  const r = f(rows - 1, cols - 1)
  return r
}

console.log(
  minCostToReachBottomRightCornerInMatrix([
    [1, 3, 5, 8],
    [4, 2, 1, 7],
    [4, 3, 2, 3],
  ]),
)
