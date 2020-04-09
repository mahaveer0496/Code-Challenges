const removeDuplicates = function (nums) {
  // return Array.from(new Set(nums));
  const obj = {};

  const finalArray = [];

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (!obj[element]) {
      obj[element] = true;
      finalArray.push(element);
    }
  }

  return finalArray;
};

console.log(removeDuplicates([1, 1, 2]));
