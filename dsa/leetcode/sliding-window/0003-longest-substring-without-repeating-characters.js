/**
 * Problem: Longest Substring Without Repeating Characters
 * LeetCode #3
 * Pattern: Sliding Window + HashMap
 * Difficulty: Medium
 *
 * Link:
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Approach:
 * - Maintain a sliding window [left, right].
 * - Use a Map to store the latest index of each char.
 * - If a repeating character appears:
 *      Move left pointer to max(left, lastSeenIndex + 1)
 * - Update maxLen for every valid window.
 *
 * Why this works:
 * - Window always contains unique characters.
 * - HashMap jump prevents O(n²) behavior.
 *
 * Edge Cases:
 * - Empty string → 0
 * - All same chars → 1
 * - No repeats → full string length
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(min(n, charset))
 */

function lengthOfLongestSubstring(s) {
  if (typeof s !== "string") {
    throw new TypeError("Input must be a string");
  }

  let left = 0;
  let maxLen = 0;
  const map = new Map();

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (map.has(char)) {
      left = Math.max(left, map.get(char) + 1);
    }

    map.set(char, right);

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

/**
 * Test Cases
 */
function runTests() {
  const tests = [
    { input: "abcabcbb", expected: 3 },
    { input: "bbbbb", expected: 1 },
    { input: "pwwkew", expected: 3 },
    { input: "", expected: 0 },
    { input: "abcdef", expected: 6 },
    { input: "a", expected: 1 },
    { input: "abba", expected: 2 },
    { input: "dvdf", expected: 3 },
  ];

  tests.forEach(({ input, expected }, idx) => {
    const result = lengthOfLongestSubstring(input);

    console.log(`Test ${idx + 1}`);
    console.log(" Input:    ", input);
    console.log(" Output:   ", result);
    console.log(" Expected: ", expected);
    console.log(" Pass:     ", result === expected);
    console.log("------------------------------");
  });

  // Error handling test
  try {
    lengthOfLongestSubstring(123);
  } catch (err) {
    console.log("Error Test:", err.message === "Input must be a string");
  }
}

runTests();
