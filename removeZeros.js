// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// You must do this in-place without making a copy of the array.
var moveZeroes = function (array) {
  const arrayOfZeros = [];
  const arrayOfNonZeros = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === 0) {
      arrayOfZeros.push(element);
    } else {
      arrayOfNonZeros.push(element);
    }
  }

  array.splice(0, array.length, ...arrayOfNonZeros.concat(arrayOfZeros));
  return array;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
