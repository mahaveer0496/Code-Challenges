/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSumBrute = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

// console.log(twoSumBrute([3, 2, 4], 6));

var binarySearch = (arr, target) => {
  const low = 0;
  const high = arr.length - 1;
  const mid = parseInt((low + high) / 2);

  if (arr.length === 0) return;

  if (low > high) {
    return -1;
  }

  if (arr[mid] === target) {
    return mid;
  }

  if (target < arr[mid]) {
    return binarySearch(arr.slice(0, mid), target);
  } else {
    return binarySearch(arr.slice(mid + 1), target);
  }
};

var twoSumWithSort = function (nums, target) {
  nums = nums.sort();
};

console.log(binarySearch([1, 2, 3, 4, 5], 2));
