/**
 * Problem: Maximum Number of Vowels in a Substring of Given Length
 * LeetCode #1456
 * Pattern: Sliding Window (Fixed Size)
 * Difficulty: Medium
 *
 * Link:
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 *
 * Problem Statement:
 * Given a string s and an integer k, return the maximum number of vowel letters
 * in any substring of s with length k.
 *
 * Approach:
 * - Use a sliding window of size k.
 * - Maintain a running count of vowels inside the window.
 * - Add vowel count when right pointer enters.
 * - Remove vowel count when left pointer exits.
 * - Track the maximum seen.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */

function maximumNoOfVowels(str, k) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  if (k > str.length || k <= 0) return 0;

  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let left = 0;
  let currentVowels = 0;
  let maxVowels = 0;

  for (let right = 0; right < str.length; right++) {
    if (vowels.has(str[right])) {
      currentVowels++;
    }

    if (right - left + 1 > k) {
      if (vowels.has(str[left])) {
        currentVowels--;
      }
      left++;
    }

    if (right - left + 1 === k) {
      maxVowels = Math.max(maxVowels, currentVowels);
    }
  }

  return maxVowels;
}

/**
 * Test Cases
 */
function runTests() {
  const tests = [
    { s: "abciiidef", k: 3, expected: 3 },
    { s: "aeiou", k: 2, expected: 2 },
    { s: "leetcode", k: 3, expected: 2 },
    { s: "rhythms", k: 4, expected: 0 },
    { s: "", k: 1, expected: 0 },
    { s: "a", k: 1, expected: 1 },
  ];

  tests.forEach(({ s, k, expected }, idx) => {
    const result = maximumNoOfVowels(s, k);
    console.log(`Test ${idx + 1}`);
    console.log(" s:        ", s);
    console.log(" k:        ", k);
    console.log(" output:   ", result);
    console.log(" expected: ", expected);
    console.log(" pass:     ", result === expected);
    console.log("-----------------------------");
  });
}

runTests();
