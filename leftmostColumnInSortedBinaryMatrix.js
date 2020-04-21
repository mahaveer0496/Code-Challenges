// A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

// Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.
// Input: mat = [[0,0],[1,1]]
// Output: 0

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */

// non-decreasing means elements after current element are > or =
// since the row is sorted, if current element is 1 then every element after it will be 1 as well

// we start at top right corner, if its 1 then we move left or we move down
// if current element is 1 then we just need to find another 1 in the same row thats before current 1, thus we dont move down, and we move left by c--
// if current element is 0 then we know elements to left will also be zero, so we go down to see if there's a 1 and repeat the above step.
var leftMostColumnWithOne = function (binaryMatrix) {
  const [rows, cols] = binaryMatrix.dimensions();
  if (rows === 0 || cols === 0) return -1;

  let r = 0;
  let c = cols - 1;
  let result = -1;

  while (r < rows && c >= 0) {
    if (binaryMatrix.get(r, c) == 1) {
      result = c;
      c--;
    } else {
      r++;
    }
  }
  return result;
};
