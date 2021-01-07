/*
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Eg -
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Algorithm -
This question is exactly like longestSubstringWithKDistinctCharacters, we just have array here instead of a string
*/

const fruitsIntoBaskets = (A, k) => {
  let maxLength = 0
  let start = 0
  let fruits = {}
  for (let end = 0; end < A.length; end++) {
    const currentFruit = A[end]

    if (!(currentFruit in fruits)) fruits[currentFruit] = 0
    fruits[currentFruit]++

    if (Object.keys(fruits).length > k) {
      fruits[A[start]]--
      if (fruits[A[start]] == 0) delete fruits[A[start]]
      start++
    }

    maxLength = Math.max(maxLength, end - start + 1)
  }
  return maxLength
}
console.log(fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C'], 2));