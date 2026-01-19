/**
 * Problem: Minimum Size Subarray Sum
 * LeetCode #209
 * Pattern: Sliding Window (Variable Size)
 * Difficulty: Medium
 *
 * Link:
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 *
 * Problem Statement:
 * Given an array of positive integers nums and a positive integer target,
 * return the minimal length of a contiguous subarray whose sum is
 * greater than or equal to target. If no such subarray exists, return 0.
 *
 * Approach:
 * - Use a sliding window with two pointers.
 * - Expand the window by moving `right` and adding nums[right] to windowSum.
 * - Once windowSum >= target:
 *     - Update minimum window length.
 *     - Shrink the window from the left to try to minimize size.
 *
 * Key Insight:
 * - All numbers are positive, so shrinking the window always reduces sum.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */

function minimumSizeSubArraySum(target, arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }
  if (arr.length === 0) return 0;

  let left = 0;
  let windowSum = 0;
  let minLength = Infinity;

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];

    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= arr[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

/**
 * Test Cases
 */
function runTests() {
  const tests = [
    { nums: [2, 3, 1, 2, 4, 3], target: 7, expected: 2 },
    { nums: [1, 4, 4], target: 4, expected: 1 },
    { nums: [1, 1, 1, 1, 1, 1, 1], target: 11, expected: 0 },
    { nums: [5], target: 5, expected: 1 },
    { nums: [], target: 3, expected: 0 },
  ];

  tests.forEach(({ nums, target, expected }, idx) => {
    const result = minimumSizeSubArraySum(target, nums);
    console.log(`Test ${idx + 1}`);
    console.log(" nums:     ", nums);
    console.log(" target:   ", target);
    console.log(" output:   ", result);
    console.log(" expected: ", expected);
    console.log(" pass:     ", result === expected);
    console.log("-----------------------------");
  });
}

runTests();
