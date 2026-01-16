/*
https://leetcode.com/problems/container-with-most-water/

Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
We can go brute force, get all pairs, compute max
pairs = [
  [1,8],
  [1,6], [8,6],
  [1,2], [8,2], [6,2],
  [1,5], [8,5], [6,5], [2,5],
  [1,4], [8,4], [6,4], [2,4], [5,4],
  [1,8], [8,8], [6,8], [2,8], [5,8], [4,8],
  [1,3], [8,3], [6,3], [2,3], [5,3], [4,3], [8,3],
  [1,7], [8,7], [6,7], [2,7], [5,7], [4,7], [8,7], [3,7],
]

Or we use 2 pointers, start at the ends and 1st move left, compute, then move right, compute, will that catch all?

pairs = [
  [1,7],

  [1,3],
  [8,7],

  [1,8],
  [6,7],

  [1,4],
  [2,7],

  [1,5],
  [5,7],

  [1,2],
  [4,7],

  [1,6],
  [8,7],

  [1,8],
  [3,7]

]
*/
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = -Infinity;
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(area, max);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

console.assert(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) === 49);
