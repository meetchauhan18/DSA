/**
 * Problem: Move Zeroes
 * LeetCode #283
 * Pattern: Two Pointers (Swap Based)
 * Difficulty: Easy
 *
 * Link:
 * https://leetcode.com/problems/move-zeroes/
 *
 * Approach:
 * - Maintain a pointer `left` for the position where the next non-zero should go.
 * - Iterate using `right` pointer:
 *      If arr[right] !== 0, swap arr[left] and arr[right], then move left forward.
 *
 * Why this works:
 * - All non-zeros get shifted in order.
 * - All remaining positions automatically become zeroes.
 *
 * Edge Cases:
 * - Empty array => return []
 * - Single element => no change
 * - All zeros => unchanged
 * - No zeros => unchanged
 * - Mixed zeros at start/end/middle => handled
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */

function moveZeroesToEnd(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  if (arr.length === 0) return arr;

  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
    }
  }

  return arr;
}

/**
 * Test Cases
 */
function runTests() {
  const tests = [
    { input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
    { input: [0], expected: [0] },
    { input: [1, 2, 3], expected: [1, 2, 3] },
    { input: [0, 0, 0], expected: [0, 0, 0] },
    { input: [0, 0, 1], expected: [1, 0, 0] },
    { input: [1], expected: [1] },
  ];

  tests.forEach(({ input, expected }, idx) => {
    const arrCopy = [...input];
    const result = moveZeroesToEnd(arrCopy);

    console.log(`Test ${idx + 1}`);
    console.log(" Input:    ", input);
    console.log(" Output:   ", result);
    console.log(" Expected: ", expected);
    console.log(" Pass:     ", JSON.stringify(result) === JSON.stringify(expected));
    console.log("-----------------------------");
  });
}

runTests();
