// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.



// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0


// Constraints:

// 1 <= text.length <= 104
// text consists of lower case English letters only.

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const target = 'balloon';
  let textFreq = new Map();
  let targetFreq = new Map();

  for (const l of text) {
      textFreq.set(l, (textFreq.get(l) || 0) + 1)
  }

  for (const t of target) {
      targetFreq.set(t, (targetFreq.get(t) || 0) + 1)
  }
  console.log(targetFreq)
  console.log(textFreq)

  let results = [];
  for (const [letter, freq] of targetFreq) { // Changed 'l' to '[letter, freq]'
    if (textFreq.has(letter)) {
      let maxPossible = Math.floor(textFreq.get(letter) / freq); // Calculated the maximum possible occurrences
      results.push(maxPossible); // Added to the results array
    } else {
      results.push(0); // If the letter doesn't exist in the text, push 0 to the results array
    }
  }
return Math.min(...results); // Return the minimum value from the results array
  // return results

};


// We can improve on this. Check out the other solutions on LeetCode