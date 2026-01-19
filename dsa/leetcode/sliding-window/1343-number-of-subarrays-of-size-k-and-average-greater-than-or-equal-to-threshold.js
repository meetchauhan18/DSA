/**
 * Problem: Number of Sub-arrays of Size K and Average ≥ Threshold
 * LeetCode #1343
 * Pattern: Sliding Window (Fixed Size)
 * Difficulty: Medium
 *
 * Link:
 * https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 *
 * Problem Statement:
 * Given an array of integers arr, an integer k, and a threshold,
 * return the number of contiguous subarrays of size k whose average
 * is greater than or equal to threshold.
 *
 * Key Insight:
 * average >= threshold
 * ⟹ sum >= threshold * k
 *
 * Approach:
 * - Use a sliding window of size k.
 * - Maintain running windowSum.
 * - When window size == k:
 *     - Check if windowSum >= threshold * k
 *     - Increment count if true
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */

function countSubarraysWithAvgAtLeastThreshold(arr, k, threshold) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }
  if (k > arr.length || k <= 0) return 0;

  let count = 0;
  let windowSum = 0;
  let left = 0;
  const requiredSum = threshold * k;

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];

    if (right - left + 1 > k) {
      windowSum -= arr[left];
      left++;
    }

    if (right - left + 1 === k && windowSum >= requiredSum) {
      count++;
    }
  }

  return count;
}

/**
 * Test Cases
 */
function runTests() {
  const tests = [
    { arr: [2, 2, 2, 2, 5, 5, 5, 8], k: 3, threshold: 4, expected: 3 },
    { arr: [1, 1, 1, 1, 1], k: 1, threshold: 0, expected: 5 },
    {
      arr: [11, 13, 17, 23, 29, 31, 7, 5, 2, 3],
      k: 3,
      threshold: 5,
      expected: 6,
    },
    { arr: [1, 2, 3], k: 4, threshold: 2, expected: 0 },
    { arr: [], k: 1, threshold: 1, expected: 0 },
  ];

  tests.forEach(({ arr, k, threshold, expected }, idx) => {
    const result = countSubarraysWithAvgAtLeastThreshold(arr, k, threshold);
    console.log(`Test ${idx + 1}`);
    console.log(" arr:       ", arr);
    console.log(" k:         ", k);
    console.log(" threshold: ", threshold);
    console.log(" result:    ", result);
    console.log(" expected:  ", expected);
    console.log(" pass:      ", result === expected);
    console.log("-----------------------------");
  });
}

runTests();
