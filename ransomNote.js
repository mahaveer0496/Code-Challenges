// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true
var canConstruct = function (ransomNote, magazine) {
  const ransomNoteMap = {};
  const magazineMap = {};
  for (const letter of ransomNote) {
    if (letter in ransomNoteMap) {
      ransomNoteMap[letter] += 1;
    } else {
      ransomNoteMap[letter] = 1;
    }
  }
  for (const letter of magazine) {
    if (letter in magazineMap) {
      magazineMap[letter] += 1;
    } else {
      magazineMap[letter] = 1;
    }
  }

  for (const [letter, count] of Object.entries(ransomNoteMap)) {
    if (!magazineMap[letter]) return false;
    if (magazineMap[letter] < count) return false;
  }
  return true;
};

console.log(canConstruct('aa', 'ab'));
