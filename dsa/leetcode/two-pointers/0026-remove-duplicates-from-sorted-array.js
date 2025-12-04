/**
 * Problem: Remove Duplicates from Sorted Array
 * LeetCode #26
 * Pattern: Two Pointers (Slow-Fast Pointer)
 * Difficulty: Easy
 *
 * Link:
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * Approach:
 * - Use two pointers:
 *     left  → points to the last unique element written
 *     right → scans the array for new unique elements
 * - If arr[right] !== arr[left], we found a new unique element.
 *   Move left forward and copy arr[right] there.
 *
 * Edge Cases:
 * - Empty array → return 0
 * - Single element array → return 1
 * - All duplicates → return 1
 * - All unique → return n
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1) (in-place)
 */

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  if (arr.length === 0) return 0;

  let left = 0;

  for (let right = 1; right < arr.length; right++) {
    if (arr[right] !== arr[left]) {
      left++;
      arr[left] = arr[right];
    }
  }

  return left + 1; // number of unique elements
}

/**
 * Test Cases
 */
function runTests() {
  const tests = [
    { input: [1, 1, 2], expected: 2 },
    { input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: 5 },
    { input: [], expected: 0 },
    { input: [5], expected: 1 },
    { input: [1, 2, 3, 4], expected: 4 },
    { input: [1, 1, 1, 1], expected: 1 },
  ];

  tests.forEach(({ input, expected }, idx) => {
    const arrCopy = [...input];
    const result = removeDuplicates(arrCopy);
    console.log(`Test ${idx + 1}`);
    console.log(" input:   ", input);
    console.log(" result:  ", result);
    console.log(" expected:", expected);
    console.log(" pass:", result === expected);
    console.log("------------------------");
  });
}

runTests();
