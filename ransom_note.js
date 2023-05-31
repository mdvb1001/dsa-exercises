// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const ransomNoteFreq = getFrequencyMap(ransomNote);
  const magazineFreq = getFrequencyMap(magazine);

  // Check if each character in ransomNote is available in magazine
  for (const [char, count] of ransomNoteFreq) {
    if (!magazineFreq.has(char) || magazineFreq.get(char) < count) {
      return false;
    }
  }

  return true;
};

// Helper function to create a frequency map of characters in a string
function getFrequencyMap(str) {
  const freqMap = new Map();
  for (const char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }
  return freqMap;
}