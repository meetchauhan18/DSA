/**
 * Problem: Maximum Average Subarray I
 * LeetCode #643
 * Pattern: Sliding Window (Fixed Size)
 * Difficulty: Easy
 *
 * Link:
 * https://leetcode.com/problems/maximum-average-subarray-i/
 *
 * Approach:
 * - Use a sliding window of size `k`.
 * - Add each element to windowSum.
 * - When window exceeds size k, subtract arr[left] and move left pointer.
 * - When window size == k, update maxSum.
 *
 * Edge Cases:
 * - Empty array → return 0
 * - k === 1 → simply return max element
 * - k > arr.length → no valid window → return null
 * - All negatives → sliding window must handle correctly
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */

function findMaxAverage(arr, k) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }
  if (arr.length === 0) return 0;
  if (k > arr.length) return null; // no valid window

  let windowSum = 0;
  let maxSum = -Infinity;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];

    // shrink window if size > k
    if (right - left + 1 > k) {
      windowSum -= arr[left];
      left++;
    }

    // update max when window size == k
    if (right - left + 1 === k) {
      maxSum = Math.max(maxSum, windowSum);
    }
  }

  return maxSum / k;
}

/**
 * Test Cases
 */
function runTests() {
  const tests = [
    { input: [1, 12, -5, -6, 50, 3], k: 4, expected: 12.75 },
    { input: [5], k: 1, expected: 5 },
    { input: [0, 4, 0, 3, 2], k: 1, expected: 4 },
    { input: [1, 2, 3, 4], k: 4, expected: 2.5 },
    { input: [-1, -2, -3, -4], k: 2, expected: -1.5 },
    { input: [2, 0, 2], k: 4, expected: null },
    { input: [], k: 1, expected: 0 },
  ];

  tests.forEach(({ input, k, expected }, idx) => {
    const result = findMaxAverage([...input], k);
    console.log(`Test ${idx + 1}`);
    console.log(" Input:    ", input);
    console.log(" k:        ", k);
    console.log(" Output:   ", result);
    console.log(" Expected: ", expected);
    console.log(
      " Pass:     ",
      expected === null ? result === null : Math.abs(result - expected) < 1e-9
    );
    console.log("-------------------------");
  });
}

runTests();
