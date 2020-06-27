/* 
Given the weights and profits of ‘N’ items, we are asked to put these items in a knapsack which has a capacity ‘C’. The goal is to get the maximum profit from the items in the knapsack. Each item can only be selected once, as we don’t have multiple quantities of any item.

Algorithm - 
* At each index, we have a choice to either include the current element, or exclude it.
  * We can only include the current item if it wieghs less than nett capacity
  * If included then we process rest of the array with new capacity = capacity - weight[currentIndex]
  * Else we process rest of the array with capacity
* Recurrence relation -
  * f(capacity,index) = Math.max(f(capacity - weights[currentIndex], currentIndex+1), f(capacity, currentIndex+1))
* Terminating conditions -
  * If we beyong end of array or capacity becomes zero we cant make any more profit thus return 0  
*/

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

const profits = [1, 6, 10, 16]
const weights = [1, 2, 3, 5]
console.log(knapsackRecursive(profits, weights, 7))
console.log(knapsackRecursive(profits, weights, 6))
