var maximalSquare = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return;

  const table = Array.from({ length: matrix.length + 1 }, () =>
    Array.from({ length: matrix[0].length + 1 }, () => 0),
  );

  for (const i in matrix) {
    for (const j in matrix[i]) {
      if (i == 0 || j == 0) {
        table[i][j] = 0;
      }
    }
  }

  let maxArea = 0;
  for (let i = 1; i <= matrix.length; i++) {
    for (let j = 1; j <= matrix[0].length; j++) {
      const el = +matrix[i - 1][j - 1];

      if (el == 1) {
        table[i][j] =
          Math.min(table[i - 1][j - 1], table[i - 1][j], table[i][j - 1]) + el;
        if (table[i][j] > maxArea) {
          maxArea = table[i][j];
        }
      }
    }
  }

  maxArea;
  table;
  return maxArea * maxArea;
};

maximalSquare([]);
maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]);
