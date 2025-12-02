/**
 * Problem: Reverse an Array (In-place)
 * Platform: GeeksForGeeks
 * Pattern: Two Pointers, Arrays
 * Difficulty: Easy
 *
 * Link:
 * https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/reverse-an-array
 *
 * Approach:
 * - Use two pointers: left at start, right at end.
 * - Swap both values and bring pointers toward center.
 *
 * Edge Cases:
 * - Empty array          → return []
 * - Single element array → return same array
 * - Array with duplicates → works normally
 * - Array with negative numbers → works normally
 * - Array with zeros → works normally
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

/**
 * Test Cases
 */
function runTests() {
  const tests = [
    { input: [2, 7, 11, 0, 15], expected: [15, 0, 11, 7, 2] },
    { input: [], expected: [] },
    { input: [5], expected: [5] },
    { input: [1, 2], expected: [2, 1] },
    { input: [-3, -2, -1], expected: [-1, -2, -3] },
    { input: [0, 0, 0], expected: [0, 0, 0] },
  ];

  tests.forEach(({ input, expected }, idx) => {
    const arrCopy = [...input];
    const result = reverseArray(arrCopy);
    console.log(`Test ${idx + 1}`);
    console.log(" input:   ", input);
    console.log(" result:  ", result);
    console.log(" expected:", expected);
    console.log(" pass:", JSON.stringify(result) === JSON.stringify(expected));
    console.log("-------------------------");
  });
}

runTests();
