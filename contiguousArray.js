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
  const auxArray = [0];
  let count_0 = 0;
  let count_1 = 0;
  nums.forEach((num) => {
    if (num === 0) {
      count_0 += 1;
    }
    if (num === 1) {
      count_1 += 1;
    }
    auxArray.push(count_0 - count_1);
  });
  const obj = {};
  auxArray.forEach((num, i) => {
    if (obj[num]) {
      obj[num].push(i);
    } else {
      obj[num] = [i];
    }
  });

  let max = [];

  for (const key in obj) {
    if (max.length < obj[key].length) {
      max = obj[key];
    }
  }

  max;
  auxArray;

  let maxIndex = -Infinity;
  let minIndex = +Infinity;
  max.forEach((num) => {
    if (maxIndex < num) {
      maxIndex = num;
    }
    if (minIndex > num) {
      minIndex = num;
    }
  });
  maxIndex;
  minIndex;
  return maxIndex - minIndex;
};

findMaxLength([
  1,
  0,
  1,
  0,
  1,
  1,
  0,
  0,
  1,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  0,
  0,
  1,
  0,
  0,
  1,
  1,
  0,
  0,
  1,
  1,
  1,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
  0,
  1,
  1,
  1,
  0,
  1,
  0,
  1,
  1,
  0,
  0,
  0,
  1,
  0,
  1,
  1,
  0,
  0,
  1,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  0,
]);

// var findMaxLength = function (nums) {
//   let count_0 = 0;
//   let count_1 = 0;
//   let previousNumber = nums[0];
//   let max_zero = 0;
//   let max_one = 0;
//   nums.forEach((currentNumber) => {
//     if (previousNumber !== currentNumber) {
//       if (count_0 && count_1) {
//         if (max_one < count_1) {
//           max_one = count_1;
//         }
//         if (max_zero < count_0) {
//           max_zero = count_0;
//         }

//         count_0 = 0;
//         count_1 = 0;
//       }
//     }

//     if (currentNumber === 1) {
//       count_1 += 1;
//     }
//     if (currentNumber === 0) {
//       count_0 += 1;
//     }

//     previousNumber;
//     currentNumber;
//     count_0;
//     count_1;
//     max_zero;
//     max_one;

//     previousNumber = currentNumber;
//   });

//   count_0;
//   count_1;
//   const result = max_zero + max_one - Math.abs(max_one - max_one);
//   result;
//   return result;
// };
