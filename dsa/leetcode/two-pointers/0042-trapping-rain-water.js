/**
 * Problem: Trapping Rain Water
 * LeetCode #42
 * Pattern: Two Pointers (Optimized) / Prefix Max Technique
 * Difficulty: Hard
 *
 * Link:
 * https://leetcode.com/problems/trapping-rain-water/
 *
 * Approach:
 * - Use two pointers: left and right.
 * - Track leftMax and rightMax.
 * - At each step:
 *      If height[left] < height[right]:
 *           if height[left] < leftMax → water trapped
 *           else update leftMax
 *           move left pointer
 *      Else:
 *           if height[right] < rightMax → water trapped
 *           else update rightMax
 *           move right pointer
 *
 * Why it works:
 * - Water trapping depends on the *minimum* of leftMax & rightMax.
 * - The pointer with smaller height determines trapped water.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */

function trapWater(height) {
  if (!Array.isArray(height) || height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let totalWater = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        totalWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        totalWater += rightMax - height[right];
      }
      right--;
    }
  }

  return totalWater;
}

/**
 * Test Cases
 */
function runTests() {
  const tests = [
    { input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expected: 6 },
    { input: [4, 2, 0, 3, 2, 5], expected: 9 },
    { input: [1, 2, 3, 4, 5], expected: 0 },
    { input: [5, 4, 3, 2, 1], expected: 0 },
    { input: [3, 0, 2], expected: 2 },
    { input: [3, 0, 2, 0, 4], expected: 7 },
    { input: [], expected: 0 },
    { input: [5], expected: 0 },
    { input: [3, 5], expected: 0 },
    { input: [2, 2, 2, 2], expected: 0 },
  ];

  tests.forEach(({ input, expected }, idx) => {
    const result = trapWater([...input]);
    console.log(`Test ${idx + 1}`);
    console.log(" Input:    ", input);
    console.log(" Output:   ", result);
    console.log(" Expected: ", expected);
    console.log(" Pass:     ", result === expected);
    console.log("---------------------------------");
  });
}

runTests();
