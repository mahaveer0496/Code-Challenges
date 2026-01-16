var numIslands = function (grid: string[][]) {
  const cols = grid[0].length;
  const rows = grid.length;

  let connectedComponents = 0;
  let maxArea = -Infinity;
  function bfs(rows: number, cols: number, queue: number[][]) {
    let cells = 0;

    while (queue.length) {
      // console.log(queue);
      const n = queue.length;
      for (let i = 0; i < n; i++) {
        const [row, col] = queue.shift()!;

        // this is needed cuz when pushing  to queue its possible a cell is neighbor of multiple other cells,
        // so queue can have duplicates, but, the 2nd time we process it again, it _will_ be `0`, so we can omit it
        if (grid[row][col] === "0") continue;

        cells++;
        grid[row][col] = "0";

        const neighbors = getRockyNeighbors(row, rows, col, cols);
        console.log({ cell: [row, col], neighbors });
        for (const [_row, _col] of neighbors) {
          queue.push([_row, _col]);
        }
      }
    }

    return cells;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1") {
        connectedComponents++;
        maxArea = Math.max(bfs(rows, cols, [[row, col]]), maxArea);
      }
    }
  }

  return maxArea;

  function getRockyNeighbors(
    row: number,
    rows: number,
    col: number,
    cols: number,
  ) {
    return [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]
      .map(([r, c]) => [row + r, col + c])
      .filter(([r, c]) => r >= 0 && r < rows && c >= 0 && c < cols)
      .filter(([r, c]) => grid[r][c] === "1");
  }
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
  ]),
);
