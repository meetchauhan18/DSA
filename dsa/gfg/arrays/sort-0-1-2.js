/**
 * Problem: Sort an array of 0s, 1s and 2s
 * Platform: GeeksForGeeks
 * Pattern: Dutch National Flag Algorithm
 * Difficulty: Easy/Medium
 *
 * Link:
 * https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/1
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */

function sort012(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }
  if (arr.length === 0) return arr;

  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
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
    { input: [], expected: [] },
    { input: [0], expected: [0] },
    { input: [1], expected: [1] },
    { input: [2], expected: [2] },
  ];

  tests.forEach(({ input, expected }, idx) => {
    const arrCopy = [...input];
    const result = sort012(arrCopy);

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
