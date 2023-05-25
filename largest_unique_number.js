// Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.



// Example 1:

// Input: nums = [5,7,3,9,4,9,8,3,1]
// Output: 8
// Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.
// Example 2:

// Input: nums = [9,9,8,8]
// Output: -1
// Explanation: There is no number that occurs only once.


// Constraints:

// 1 <= nums.length <= 2000
// 0 <= nums[i] <= 1000


/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
  let counts = new Map()
  let results = []
  for (const c of nums) {
      counts.set(c, (counts.get(c) || 0) + 1);
  }

  console.log(counts)
  counts.forEach((value, key) => {
      if (value === 1) {
        results.push(key);
      }
  });

  console.log(results)
  if (results.length === 0) return -1
  return Math.max(...results)
};