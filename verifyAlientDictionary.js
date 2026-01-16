// https://leetcode.com/problems/verifying-an-alien-dictionary/

/**
 *
 * @param {string[]} words
 * @param {string} order
 */
var isAlienSorted = function (words, order) {
  const orderDict = {};

  order.split("").forEach((alphabet, index) => {
    orderDict[alphabet] = index;
  });

  const cursors = Array.from({ length: words.length }, () => 0);

  words.forEach((word) => {});
  cursors;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
// console.log(
//   isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"),
// );
// console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));
