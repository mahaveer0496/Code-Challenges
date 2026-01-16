var numIslands = function (grid: string[][]) {
  const cols = grid[0].length;
  const rows = grid.length;

  let connectedComponents = 0;

  function bfs(rows: number, cols: number, queue: number[][]) {
    while (queue.length) {
      for (let i = 0; i < queue.length; i++) {
        const [row, col] = queue.shift()!;

        if (grid[row][col] === "0") continue;
        grid[row][col] = "0";

        for (const [_row, _col] of getRockyNeighbors(row, rows, col, cols)) {
          queue.push([_row, _col]);
        }
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1") {
        connectedComponents++;
        bfs(rows, cols, [[row, col]]);
      }
    }
  }

  return connectedComponents;

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
      .map(([_row, _col]) => [row + _row, col + _col])
      .filter(
        ([_row, _col]) => 0 <= _row && _row < rows && 0 <= _col && _col < cols,
      )
      .filter(([_row, _col]) => grid[_row][_col] === "1");
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

const numIslands2 = (grid) => {
  let count = 0; // the counted islands
  //Go though each cell of the 2d array/grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] == "1") {
        count++;
        dfs(row, col, grid);
      }
    }
  }
  return count;
};

// Takes a cell in a grid with a “1” , turns it into a “0” and explores (DFS) any of the left, right, up, down 1’s
function dfs(row, col, grid) {
  //Let's return IF
  // row < 0 OR col < 0 OR row is out of bounds(meaning the row is larger than the number of arrays in the 2d array) OR col is at/out of bounds (meaning the current col is at/over the number of elements a row has.)
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[row].length ||
    grid[row][col] === "0"
  ) {
    return;
  }

  //Otherwise, we should explore it!
  //First let's set the current spot to "0"
  grid[row][col] = "0";

  //Possibilites:
  // 1) 1 to the right, left, top, bottom
  //right
  dfs(row, col + 1, grid);
  //Left
  dfs(row, col - 1, grid);
  //Down
  dfs(row + 1, col, grid);
  //Up
  dfs(row - 1, col, grid);
}
