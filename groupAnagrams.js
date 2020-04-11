// Given an array of strings, group anagrams together.
// Example:
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

const groupAnagrams = (array) => {
  let words = [...array];
  const indices = Array.from({ length: array.length }, (_, i) => i);

  indices;
  words = words.map((i) => [...i].sort().join(''));
  // .map((i) => [...i].reduce((acc, curr) => acc + curr.charCodeAt(), 0));
  // words;
  for (let j = 0; j < words.length; j++) {
    for (let i = 0; i < words.length; i++) {
      if (words[i + 1]) {
        if (words[i] > words[i + 1]) {
          [words[i], words[i + 1]] = [words[i + 1], words[i]];
          [indices[i], indices[i + 1]] = [indices[i + 1], indices[i]];
        }
      }
    }
  }

  const obj = {};
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    if (obj[element]) {
      obj[element].push(indices[i]);
    } else {
      obj[element] = [indices[i]];
    }
  }

  const result = [];
  for (const [key, value] of Object.entries(obj)) {
    const temp = [];
    for (let i = 0; i < value.length; i++) {
      temp.push(array[value[i]]);
    }
    result.push(temp);
  }
  return result;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(
  groupAnagrams([
    'cab',
    'tin',
    'pew',
    'duh',
    'may',
    'ill',
    'buy',
    'bar',
    'max',
    'doc',
  ]),
);
