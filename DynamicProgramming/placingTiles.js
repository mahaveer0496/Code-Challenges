/* 
Problem -
Given an empty plot of size 2xn, return number of ways to place tiles such that the entire plot is covered. 
Each tile is of size 2x1 and can be placed either horizontally or vertically


Algorithm -
* Since the plot is 2xn and tiles are 2x1, we can either place a tile horizontally or vertically.
  If we place 1st tile vertically the plot reduces to 2x(n-1) and 
  If we place 1st tile horizontally then we have to place 2nd tile horizontally as well, and the plot reduces to 2x(n-2), so we just need to find the sum from both (view ./placingtiles.png)
* Recurrence relation -
  * f(n) = f(n-1) + f(n-2) 🤔 kinda like fibonacci except Terminating conditions
* Terminating conditions -
  * if n == 1 we can only place the tile vertically cuz 2x1 plot can only have 1 2x1 tile
  * if n == 2 we can only place both tiles either horizontally or vertically cuz 2x2 plot can have 2 horizontally placed tiles or 2 vertically placed tiles
*/

const placing2xNTiles = (n) => {
  if (!n) return 0
  const f = (n) => {
    let r
    if (n == 1) r = 1
    else if (n == 2) r = 2
    else r = f(n - 1) + f(n - 2)
    return r
  }
  return f(n)
}
console.log(placing2xNTiles(6))

/* 
General from of above Algorithm, where we're giving MxN plot and Mx1 tiles
*/
const placingNxMTiles = (n, m) => {}
