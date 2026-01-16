var trap = function (height) {
  let water = 0;

  while (height.some((h) => h > 0)) {
    let left = 0;
    let right = 1;

    while (right < height.length || left < height.length) {
      if (height[right] === 0) {
        right++;
        continue;
      }

      if (height[left] === 0) {
        left = right;
        right++;
        continue;
      }

      if (height[left] !== 0 && height[right] !== 0 && left !== right) {
        water += right - left - 1;
        left = right;
        right++;
        continue;
      }
    }

    height = height.map((h) => {
      if (h === 0) return 0;
      return h - 1;
    });
  }

  return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
