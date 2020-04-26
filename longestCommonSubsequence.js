// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

// If there is no common subsequence, return 0.

// Example 1:

// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

var longestCommonSubsequenceRecursion = function (text1, text2) {
  const LCS = (A, B, i, j) => {
    if (!A[i] || !B[j]) {
      return 0;
    }
    if (A[i] == B[j]) {
      return 1 + LCS(A, B, i + 1, j + 1);
    }
    return Math.max(LCS(A, B, i + 1, j), LCS(A, B, i, j + 1));
  };
  return LCS(text1, text2, 0, 0);
};

var longestCommonSubsequenceDP = function (A, B) {
  const lcs = Array.from({ length: A.length + 1 }, () =>
    Array.from({ length: B.length + 1 }, () => 0),
  );

  for (let i = 1; i < A.length + 1; i++) {
    for (let j = 1; j < B.length + 1; j++) {
      if (A[i - 1] === B[j - 1]) {
        lcs[i][j] = 1 + lcs[i - 1][j - 1];
      } else {
        lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
      }
    }
  }

  return lcs[A.length][B.length];
};

console.log(longestCommonSubsequenceDP('abc', 'd'));
