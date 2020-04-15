// Product of Array Except Self
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
var productExceptSelf = function (array) {
  let product = 1;
  let zeroCount = 0;

  array.forEach((num, i) => {
    if (num !== 0) {
      product = product * num;
    }
    if (num === 0) {
      zeroCount++;
    }
  });

  if (zeroCount > 1) {
    return array.map(() => 0);
  }

  if (zeroCount === 1) {
    return array.map((num) => (num === 0 ? product : 0));
  }

  return array.map((num) => product / num);
};

console.log(productExceptSelf([1, 2, 3, 4]));
