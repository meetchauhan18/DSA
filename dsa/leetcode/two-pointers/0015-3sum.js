/**
 * Problem: 3Sum
 * LeetCode #15
 * Pattern: Two Pointers + Sorting
 * Difficulty: Medium
 *
 * Link:
 * https://leetcode.com/problems/3sum/
 *
 * Constraints & Notes:
 * - Find all unique triplets that sum to zero.
 * - Output must not contain duplicates.
 * - Array can contain negative, zero, and positive numbers.
 *
 * Approach:
 * 1. Sort array to use two-pointer technique and handle duplicates.
 * 2. For each index i:
 *      - Skip duplicate values for i.
 *      - Use two pointers (left, right) to find pairs summing with arr[i] to zero.
 * 3. Skip duplicates for left and right values after finding valid triplets.
 *
 * Time Complexity:  O(n^2)
 * Space Complexity: O(1) extra (excluding output array)
 */

function threeSum(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    // Skip duplicates for the first element
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);

        // Skip duplicates for left pointer
        while (left < right && arr[left] === arr[left + 1]) {
          left++;
        }

        // Skip duplicates for right pointer
        while (left < right && arr[right] === arr[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

/**
 * Test Cases
 */
function runTests() {
  const tests = [
    { input: [-1, 0, 1, 2, -1, -4], expected: [[-1, -1, 2], [-1, 0, 1]] },
    { input: [], expected: [] },
    { input: [0], expected: [] },
    { input: [0, 0, 0], expected: [[0, 0, 0]] },
    { input: [3, -2, 1, 0], expected: [] },
    { input: [-2, 0, 1, 1, 2], expected: [[-2, 0, 2], [-2, 1, 1]] },
  ];

  tests.forEach(({ input, expected }, idx) => {
    const result = threeSum([...input]);

    console.log(`Test ${idx + 1}`);
    console.log(" Input:    ", input);
    console.log(" Output:   ", result);
    console.log(" Expected: ", expected);
    console.log(" Pass:     ", JSON.stringify(result) === JSON.stringify(expected));
    console.log("-----------------------------");
  });
}

runTests();
