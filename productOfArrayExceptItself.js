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

// console.log(productExceptSelf([1, 2, 3, 4]));

const productExceptSelfWithoutDivision = (array) => {
  const prefixProducts = [];
  const suffixProducts = [];
  const result = [];

  for (const num of array) {
    const last = prefixProducts.slice(-1)[0];
    prefixProducts.push(last ? last * num : num);
  }
  for (const num of array.reverse()) {
    const last = suffixProducts.slice(-1)[0];
    suffixProducts.push(last ? last * num : num);
  }

  for (const i in array) {
    if (i == 0) {
      result.push(suffixProducts[+i + 1]);
    } else if (i == array.length - 1) {
      result.push(prefixProducts[+i - 1]);
    } else {
      result.push(prefixProducts[+i - 1] * suffixProducts[+i + 1]);
    }
  }
  prefixProducts;
  suffixProducts;
  result;
};

console.log(productExceptSelfWithoutDivision([1, 2, 3, 4]));
