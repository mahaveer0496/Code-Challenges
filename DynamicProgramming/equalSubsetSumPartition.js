/* 
Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both the subsets is equal.


Algorithm - 
* The total sum of array is S, so if can find a subset with sum S/2 then there must be another subset with S/2
* If the sum is even only then can we partition.
* So, find the sum, check if its even and then
* We can iterate through the array and at each iteration we can either include current item or exclude it.
  * If we include it then we need to search the rest of array for Sum - arr[i]
  * If we exclude it then we need to search the rest of array for Sum
* Recurrence relation -
  * f(i, sum) = f(i-1, sum-arr[i]) || f(i-1, sum) 💡exactly like subsetSum.js
* Terminating conditions -
  * if sum == 0 we found the subset cuz we kept decreasing so, return true
  * if i < 0, we reached the end but didnt find the sum so, return false
*/

const equalSubsetSumPartition = (arr) => {
  const total = arr.reduce((acc, curr) => acc + curr, 0)
  if (total % 2 != 0) return false

  const f = (i, sum) => {
    if (sum == 0) return true
    if (i < 0) return false
    if (arr[i] > sum) return f(i - 1, sum)
    return f(i - 1, sum - arr[i]) || f(i - 1, sum)
  }
  return f(arr.length - 1, total / 2)
}

console.log(equalSubsetSumPartition([1, 2, 3, 4]))
console.log(equalSubsetSumPartition([1, 1, 3, 4, 7]))
console.log(equalSubsetSumPartition([2, 3, 4, 6]))
