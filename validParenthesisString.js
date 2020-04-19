// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.
// Example 1:
// Input: "()"
// Output: True
// Example 2:
// Input: "(*)"
// Output: True
// Example 3:
// Input: "(*))"
// Output: True

// ! re-read this question and solution
var checkValidString = function (s) {
  if (!s || s === '*') return true;
  if (s.length === 1) return false;

  let leftBalance = 0;

  for (const i of [...s]) {
    i;
    if (i === ')') {
      leftBalance -= 1;
    } else {
      leftBalance += 1;
    }

    if (leftBalance < 0) {
      return false;
    }
  }

  if (leftBalance == 0) return true;

  let rightBalance = 0;
  for (const i of [...s].reverse()) {
    i;
    if (i === '(') {
      rightBalance -= 1;
    } else {
      rightBalance += 1;
    }
    if (rightBalance < 0) {
      return false;
    }
  }

  return true;
};

console.log(checkValidString('(***)'));
