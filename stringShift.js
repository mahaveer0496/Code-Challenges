// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

// direction can be 0 (for left shift) or 1 (for right shift).
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

// Example 1:

// Input: s = "abc", shift = [[0,1],[1,2]]
// Output: "cab"
// Explanation:
// [0,1] means shift to left by 1. "abc" -> "bca"
// [1,2] means shift to right by 2. "bca" -> "cab"
// Example 2:

// Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
// Output: "efgabcd"
// Explanation:
// [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
// [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
// [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
// [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"

// just find net shifts by looping through operations and do one shift at the end
var stringShift = function (s, shift) {
  let leftShifts = 0;
  let rightShifts = 0;
  shift.forEach((array) => {
    if (array[0] === 0) {
      leftShifts += array[1];
    }
    if (array[0] === 1) {
      rightShifts += array[1];
    }
  });

  const netShifts = (leftShifts - rightShifts) % s.length;
  console.log(s.length);
  leftShifts;
  rightShifts;
  netShifts;
  if (netShifts === 0) return s;
  if (netShifts > 0) {
    const charactersToAppend = s.slice(0, netShifts);
    const charactersToPrepend = s.slice(netShifts);
    return charactersToPrepend + charactersToAppend;
  }
  if (netShifts < 0) {
    const charactersToAppend = s.slice(0, s.length + netShifts);
    const charactersToPrepend = s.slice(netShifts);
    return charactersToPrepend + charactersToAppend;
  }
};

const s = 'wpdhhcj';
const net = 5;

console.log(
  stringShift('xqgwkiqpif', [
    [1, 4],
    [0, 7],
    [0, 8],
    [0, 7],
    [0, 6],
    [1, 3],
    [0, 1],
    [1, 7],
    [0, 5],
    [0, 6],
  ]),
);
