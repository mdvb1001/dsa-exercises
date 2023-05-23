// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.



// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false


// Constraints:

// 1 <= sentence.length <= 1000
// sentence consists of lowercase English letters.

/**
 * @param {string} sentence
 * @return {boolean}
 */
// First iteration
// var checkIfPangram = function(sentence) {
//     let ans = []
//     let alphabethSet = new Set('abcdefghijklmnopqrstuvwxyz')

//     for (const letter of sentence) {
//         if (alphabethSet.has(letter)) ans.push(letter)
//     }
//     if (ans.length >= 26) return true
//     else return false
// };

let checkIfPangram = function (sentence) {

  if (sentence.length < 26) return false;
  return new Set(sentence.split("")).size === 26;

};