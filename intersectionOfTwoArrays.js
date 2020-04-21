// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

var intersect = function (nums1, nums2) {
  const countObj1 = {};
  const countObj2 = {};

  for (const num of nums1) {
    if (num in countObj1) {
      countObj1[num] += 1;
    } else {
      countObj1[num] = 1;
    }
  }
  const result = [];
  for (const num of nums2) {
    if (num in countObj1 && countObj1[num] !== 0) {
      countObj1[num] -= 1;
      result.push(num);
    }
  }
  result;
  return result;
  // for (const num of nums2) {
  //   if (num in countObj2) {
  //     countObj2[num] += 1;
  //   } else {
  //     countObj2[num] = 1;
  //   }
  // }
  // const arr = [];
  // for (const key in countObj1) {
  //   if (key in countObj2) {
  //     const diff = Math.min(countObj1[key], countObj2[key]);
  //     for (let i = 0; i < diff; i++) {
  //       arr.push(key);
  //     }
  //   }
  // }
  // arr;
  // return arr;
};

intersect([1, 2, 1, 1], [3, 1, 1]);
