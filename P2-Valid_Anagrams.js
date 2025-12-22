// Problem Statement

// You are given two strings s and t.
// Return true if t is an anagram of s, and false otherwise.
// An anagram is formed by rearranging the letters of another word using all original characters exactly once.

// Example
// Input:  s = "anagram", t = "nagaram"
// Output: true

// Input:  s = "rat", t = "car"
// Output: false

// (Using HashMap)
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const count = {};

    // Count characters in s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Subtract using t
    for (let char of t) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    return true;
};

//////////////////////////////////////////////////

// Time & Space Complexity
// Time Complexity: O(n)
// Space Complexity: O(1)
// (Because only lowercase English letters are used)

//////////////////////////////////////////////////

// Alternative Solution (Using Sorting)
const isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    return s.split('').sort().join('') === t.split('').sort().join('');
};
