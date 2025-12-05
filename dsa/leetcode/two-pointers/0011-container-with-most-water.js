/**
 * Problem: Container With Most Water
 * LeetCode #11
 * Pattern: Two Pointers (Opposite Direction)
 * Difficulty: Medium
 *
 * Link:
 * https://leetcode.com/problems/container-with-most-water/
 *
 * Approach:
 * - Use two pointers: left at start, right at end.
 * - At each step:
 *     - Compute the area = min(height[left], height[right]) * (right - left)
 *     - Update maxArea if needed.
 *     - Move the pointer with the smaller height inward.
 *       (Because height limits water; wider width won't help if the smaller wall stays)
 *
 * Why this works:
 * - The maximum area must involve comparing combinations from both ends.
 * - Moving the larger height pointer doesn't help because width shrinks and height doesn't improve.
 *
 * Edge Cases:
 * - Empty array → return 0
 * - Single element → return 0
 * - Two elements → area = min(a, b) * 1
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */

function maxArea(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  if (arr.length < 2) return 0;

  let left = 0;
  let right = arr.length - 1;
  let maxArea = 0;

  while (left < right) {
    const height = Math.min(arr[left], arr[right]);
    const width = right - left;
    const area = height * width;

    if (area > maxArea) {
      maxArea = area;
    }

    // Move the pointer with smaller height
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

/**
 * Test Cases
 */
function runTests() {
  const tests = [
    { input: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
    { input: [1, 1], expected: 1 },
    { input: [4, 3, 2, 1, 4], expected: 16 },
    { input: [1, 2, 1], expected: 2 },
    { input: [], expected: 0 },
    { input: [5], expected: 0 },
  ];

  tests.forEach(({ input, expected }, idx) => {
    const result = maxArea(input);
    console.log(`Test ${idx + 1}`);
    console.log(" Input:    ", input);
    console.log(" Output:   ", result);
    console.log(" Expected: ", expected);
    console.log(" Pass:     ", result === expected);
    console.log("-----------------------------");
  });
}

runTests();
