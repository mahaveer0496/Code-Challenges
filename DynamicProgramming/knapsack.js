/* 
Given the weights and profits of ‘N’ items, we are asked to put these items in a knapsack which has a capacity ‘C’. The goal is to get the maximum profit from the items in the knapsack. Each item can only be selected once, as we don’t have multiple quantities of any item.

Algorithm - 
* At each index, we have a choice to either include the current element, or exclude it.
  * We can only include the current item if it wieghs less than nett capacity
  * If included then we process rest of the array with new capacity = capacity - weight[currentIndex]
  * Else we process rest of the array with capacity
* Recurrence relation -
  * f(capacity,index) = Math.max(profit[currentIndex] + f(capacity - weights[currentIndex], currentIndex+1), f(capacity, currentIndex+1))
* Terminating conditions -
  * If we beyong end of array or capacity becomes zero we cant make any more profit thus return 0
*/

/* 

[
  {name: foo1, weight: 10, profit: 2},
  {name: foo2, weight: 7, profit: 12},
  {name: foo3, weight: 2, profit: -2},
]

max weight you can carry is - 10
*/

// TODO : Find Big-oh with memo+recursion
// TODO: WHY THIS IS INFINITE LOOP!
// const f = (capacity, currentIndex) => {
//   if (capacity <= 0 || currentIndex >= profits.lenght) return 0
//   return Math.max(
//     weights[currentIndex] <= capacity
//       ? profits[currentIndex] +
//           f(capacity - weights[currentIndex], currentIndex + 1)
//       : 0,
//     f(capacity, currentIndex + 1),
//   )
// }

const knapsackRecursive = (profits, weights, capacity) => {
  const memo = {}
  const f = (capacity, currentIndex) => {
    const memoKey = capacity + currentIndex
    if (memo[memoKey]) return memo[memoKey]
    let r
    if (capacity <= 0 || currentIndex >= profits.length) r = 0
    else {
      let profitWithItemIncluded = 0
      if (weights[currentIndex] <= capacity) {
        profitWithItemIncluded =
          profits[currentIndex] +
          f(capacity - weights[currentIndex], currentIndex + 1)
      }

      const profitWithItemExcluded = f(capacity, currentIndex + 1)
      r = Math.max(profitWithItemIncluded, profitWithItemExcluded)
    }
    memo[memoKey] = r
    return r
  }

  return f(capacity, 0)
}
/* 
branching factor ^ n -> 2 ^ n
f({capacity: 7, currentIndex: 0})
  f(6, 1)
    f(4, 2) -> 26
      f(1, 3) -> 16
        f(-4,4) -> 0
      f(3, 4) -> 0
    f(6, 2) 16
      -> 16
  f(7, 1)
    f(5, 2) -> 26
      f(2, 3) -> 16
        f(-3, 4) -> 0
        f(2, 4) -> 0
      f(5, 3) -> 0      
    f(7, 2)
      f(4, 3) -> 16 + 0
      f(7, 3) -> 0
*/
const profits = [1, 6, 10, 16]
const weights = [1, 2, 3, 5]
console.log(knapsackRecursive(profits, weights, 7))
console.log(knapsackRecursive(profits, weights, 6))
