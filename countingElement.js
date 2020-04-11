// Given an integer array arr, count element x such that x + 1 is also in arr.

// If there're duplicates in arr, count them seperately.
// Example 1:
// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

// Example 2:
// Input: arr = [1,1,3,3,5,5,7,7]
// Output: 0
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.

// Example 3:
// Input: arr = [1,3,2,3,5,0]
// Output: 3
// Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.

// Example 4:
// Input: arr = [1,1,2,2]
// Output: 2
// Explanation: Two 1s are counted cause 2 is in arr.

var countElements = function (array) {
  const hashMap = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (hashMap[element]) {
      hashMap[element] += 1;
    } else {
      hashMap[element] = 1;
    }
  }

  hashMap;
  let count = 0;
  for (const [key, value] of Object.entries(hashMap)) {
    key;
    value;
    for (let j = 0; j < value; j++) {
      const indexOfElementPlusOne = array.findIndex((el) => el == +key + 1);
      // indexOfElementPlusOne

      const indexOfElement = array.findIndex((el) => el == key);
      // indexOfElement;

      if (indexOfElementPlusOne > -1) {
        count += 1;
        hashMap[key] -= 1;
        array.splice(indexOfElement, 1);
      }
    }
  }

  // count;

  return count;
};
countElements([1, 1, 2]);
// countElements([1, 1, 3, 3, 5, 5, 7, 7]);
// countElements([1, 3, 2, 3, 5, 0]);
// countElements([1, 1, 2, 2]);
