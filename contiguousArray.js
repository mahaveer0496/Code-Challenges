// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

// Note: The length of the given binary array will not exceed 50,000.

var findMaxLength = (nums) => {
  // convert 0 to -1, this allows net sum between some range to become 0 so we know elements in between cancel out each other
  const invertedArray = nums.map((num) => (num == 0 ? -1 : 1));
  let sum = 0;
  let maxSoFar = 0;

  // create sum array, just add each element of invertedArray
  const sumArray = [];
  invertedArray.forEach((num, i) => {
    sum += num;
    if (sum === 0) {
      maxSoFar = i + 1;
    }
    sumArray.push(sum);
  });

  // create a hash and store the 1st occurence index of an element,
  // if element was seen before, then we just compute range between previous index and current index of occurence, and if this range is greater than update maxSoFar
  const hash = {};
  sumArray.forEach((num, i) => {
    if (hash[num] != null) {
      if (i - hash[num] > maxSoFar) {
        maxSoFar = i - hash[num];
      }
    } else {
      hash[num] = i;
    }
  });
  maxSoFar;
  hash;
  return maxSoFar;
};

findMaxLength([0, 1, 0, 1, 0, 0, 1]);
