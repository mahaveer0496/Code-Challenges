/* 
Given an array of non-negative integers and a positive number x, determing if there exists a subset with sum = x
eg - arr = [3,2,7,1] x = 6 -> subset = [3,2,1]


Algorithm - 
* We can iterate through the array and at each iteration we can either include current item or exclude it.
  * If we include it then we need to search the rest of array for Sum - arr[i]
  * If we exclude it then we need to search the rest of array for Sum
* Recurrence relation -
  * f(i, sum) = f(i-1, sum-arr[i]) || f(i-1, sum)
* Terminating conditions -
  * if sum == 0 we found the subset cuz we kept decreasing so, return true
  * if i < 0, we reached the end but didnt find the sum so, return false
*/

const subsetSum = (arr, sum) => {
  const f = (i, sum) => {
    if (sum == 0) return true
    if (i < 0) return false
    if (arr[i] > sum) return f(i - 1, sum)
    return f(i - 1, sum - arr[i]) || f(i - 1, sum)
  }
  return f(arr.length - 1, sum)
}

console.log(subsetSum([3, 2, 7, 1], 1))
