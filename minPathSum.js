// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

var minPathSum = function (grid) {
  if (grid.length === 0) return 0;
  const m = grid.length;
  const n = grid[0].length;

  let ret = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

  ret[0][0] = grid[0][0];

  for (let i = 1; i != m; ++i) {
    ret[i][0] = grid[i][0] + ret[i - 1][0];
  }

  ret;

  for (let i = 1; i != n; ++i) {
    ret[0][i] = grid[0][i] + ret[0][i - 1];
  }

  ret;

  for (let i = 1; i != m; ++i) {
    for (let j = 1; j != n; ++j) {
      console.log({ i, j });
      ret[i][j] = grid[i][j] + Math.min(ret[i - 1][j], ret[i][j - 1]);
    }
  }

  return ret[m - 1][n - 1];
};

minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
