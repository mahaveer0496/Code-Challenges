/* 
Given a set of positive numbers, partition the set into two subsets with a minimum difference between their subset sums.


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

const minimumSubsetSumDifference = (arr) => {
  const f = (currentIndex, sum1, sum2) => {
    if (currentIndex == arr.length) return Math.abs(sum1 - sum2)
    const diff1 = f(currentIndex + 1, sum1 + arr[currentIndex], sum2)
    const diff2 = f(currentIndex + 1, sum1, sum2 + arr[currentIndex])
    return Math.min(diff1, diff2)
  }
  return f(0, 0, 0)
}

console.log(minimumSubsetSumDifference([1, 2, 3, 9]))
console.log(minimumSubsetSumDifference([1, 2, 7, 1, 5]))
console.log(minimumSubsetSumDifference([1, 3, 100, 4]))
