/**
 * Problem: Sort Colors
 * LeetCode #75
 * Pattern: Dutch National Flag Algorithm, Three Pointers
 * Difficulty: Medium
 *
 * Link:
 * https://leetcode.com/problems/sort-colors/
 *
 * Goal:
 * Sort the array containing only 0, 1, 2 in-place.
 *
 * Approach (Dutch National Flag Algorithm):
 * - low: boundary for 0s
 * - mid: current pointer
 * - high: boundary for 2s
 *
 * Rules:
 * - arr[mid] === 0 → swap with arr[low], increment low & mid
 * - arr[mid] === 1 → mid++
 * - arr[mid] === 2 → swap with arr[high], decrement high (don't move mid)
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */

function sortColors(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }
  if (arr.length === 0) return arr;

  for (const val of arr) {
    if (val !== 0 && val !== 1 && val !== 2) {
      throw new Error(`Invalid value '${val}', only 0, 1, 2 allowed.`);
    }
  }

  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    const value = arr[mid];

    if (value === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (value === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

/**
 * Test Cases
 */
function runTests() {
  const tests = [
    { input: [2, 0, 2, 1, 1, 0], expected: [0, 0, 1, 1, 2, 2] },
    { input: [0], expected: [0] },
    { input: [1], expected: [1] },
    { input: [2], expected: [2] },
    { input: [], expected: [] },
    { input: [0, 1, 2], expected: [0, 1, 2] },
    { input: [2, 2, 1, 0, 0], expected: [0, 0, 1, 2, 2] },
  ];

  tests.forEach(({ input, expected }, idx) => {
    const arrCopy = [...input];
    const result = sortColors(arrCopy);

    console.log(`Test ${idx + 1}`);
    console.log(" Input:   ", input);
    console.log(" Output:  ", result);
    console.log(" Expected:", expected);
    console.log(
      " Pass:    ",
      JSON.stringify(result) === JSON.stringify(expected)
    );
    console.log("--------------------------");
  });
}

runTests();
