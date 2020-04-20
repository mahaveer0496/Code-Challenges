var search = function (nums, target) {
  return helper(nums, 0, nums.length - 1, target);
};

const helper = function (arr, l, h, key) {
  l;
  h;
  if (l > h) {
    return -1;
  }

  const mid = parseInt((l + h) / 2);
  mid;
  if (arr[mid] === key) {
    return mid;
  }

  if (arr[l] <= arr[mid]) {
    if (key >= arr[l] && key <= arr[mid]) {
      return helper(arr, l, mid - 1, key);
    }
    return helper(arr, mid + 1, h, key);
  }

  if (key >= arr[mid] && key <= arr[h]) {
    return helper(arr, mid + 1, h, key);
  }
  return helper(arr, l, mid - 1, key);
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
