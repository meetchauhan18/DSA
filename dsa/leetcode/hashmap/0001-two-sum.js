/**
 * Problem: Two Sum (LeetCode #1)
 * Platform: LeetCode
 * Pattern: HashMap, Arrays
 *
 * Question:
 * Given an array of integers nums and an integer target,
 * return the indices of the two numbers that add up to target.
 *
 * Constraints:
 * - Exactly 1 valid answer exists
 * - Time requirement: Ideally O(n)
 *
 * Approach (HashMap, O(n)):
 * - We iterate through nums once.
 * - For each value nums[i], compute complement = target - nums[i].
 * - Check if complement exists in map:
 *     -> if yes: we already stored its index, so return [index, i]
 * - Otherwise store nums[i] → its index in the map.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(n)
 */

function twoSum(nums, target) {
  const map = new Map(); // value → index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  // No solution case (should never happen as per problem guarantee)
  return [];
}

/**
 * Test Cases
 */
function runTests() {
  const tests = [
    {
      nums: [2, 7, 11, 15],
      target: 9,
      expected: [0, 1],
    },
    {
      nums: [3, 2, 4],
      target: 6,
      expected: [1, 2],
    },
    {
      nums: [3, 3],
      target: 6,
      expected: [0, 1],
    },
  ];

  tests.forEach(({ nums, target, expected }, index) => {
    const result = twoSum([...nums], target);
    console.log(`Test ${index + 1}`);
    console.log(" nums:    ", nums);
    console.log(" target:  ", target);
    console.log(" result:  ", result);
    console.log(" expected:", expected);
    console.log(" pass:", JSON.stringify(result) === JSON.stringify(expected));
    console.log("----------------------");
  });
}

runTests();
