/**
 * Problem: Second Largest Element in Array
 * Platform: GeeksForGeeks
 * Pattern: Arrays, Single Scan
 * Difficulty: Easy
 *
 * Link:
 * https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/second-largest3735
 *
 * Approach:
 * - Maintain two trackers: largest and secondLargest.
 * - For each element:
 *     - If the number > largest:
 *         -> secondLargest = largest
 *         -> largest = number
 *     - Else if number < largest AND number > secondLargest:
 *         -> secondLargest = number
 *
 * Edge cases:
 * - If array has < 2 unique elements → return -1
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */

function getSecondLargest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return -1;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? -1 : secondLargest;
}

/**
 * Test cases
 */
function runTests() {
  const tests = [
    { arr: [12, 35, 1, 10, 34, 1], expected: 34 },
    { arr: [10, 10], expected: -1 },
    { arr: [5, 1], expected: 1 },
    { arr: [7], expected: -1 },
    { arr: [2, 3, 4, 5], expected: 4 },
    { arr: [-1, -3, -5, -2], expected: -2 },
  ];

  tests.forEach(({ arr, expected }, idx) => {
    const result = getSecondLargest([...arr]);
    console.log(`Test ${idx + 1}:`, arr);
    console.log(" result:  ", result);
    console.log(" expected:", expected);
    console.log(" pass:", result === expected);
    console.log("-------------------------");
  });
}

runTests();
