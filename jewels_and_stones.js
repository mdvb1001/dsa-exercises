// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".



// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0


// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  const stonesMap = new Map()
  for (const s of stones) {
      if (!stonesMap.has(s)) {
          stonesMap.set(s, 0)
      }
      stonesMap.set(s, stonesMap.get(s) + 1)
  }
  let ans = 0
  Array.from(jewels).forEach(j => {
      if (stonesMap.has(j)) {
          ans += stonesMap.get(j)
      }
  })
  return ans
};