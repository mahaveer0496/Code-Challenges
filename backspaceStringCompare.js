// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".

// Example 3:
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".

// Example 4:
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

// Note:
// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.

// Follow up:
// Can you solve it in O(N) time and O(1) space?
var backspaceCompare = function (S, T) {
  const stack1 = [];
  const stack2 = [];

  for (let i = 0; i < S.length; i++) {
    const element = S[i];

    if (element === '#') {
      stack1.pop();
    } else {
      stack1.push(element);
    }
  }

  for (let i = 0; i < T.length; i++) {
    const element = T[i];

    if (element === '#') {
      stack2.pop();
    } else {
      stack2.push(element);
    }
  }

  // stack1;
  // stack2;
  const answer = stack1.join('') === stack2.join('');
  // answer;
  return answer;
};

backspaceCompare('ab#c', 'ad#c');
backspaceCompare('a##c', '#a#c');
