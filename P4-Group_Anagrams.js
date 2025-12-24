// Problem Statement

// Given an array of strings strs,
// group the anagrams together.
// You can return the answer in any order.

// Example
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

// Input: strs = [""]
// Output: [[""]]

// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = function(strs) {
    const map = new Map(); // key -> array of anagrams

    for (let str of strs) {
        // Sort the string to form the key
        const key = str.split('').sort().join('');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }

    return Array.from(map.values());
};

/////////////////////////////////////////////////

// Time & Space Complexity
// Time Complexity: O(n * k log k)
//   n = number of strings
//   k = max length of a string
// Space Complexity: O(n * k)

/////////////////////////////////////////////////

// Alternative (Character Count Key - Optimized)
const groupAnagrams = function(strs) {
    const map = new Map();

    for (let str of strs) {
        const count = Array(26).fill(0);

        for (let char of str) {
            count[char.charCodeAt(0) - 97]++;
        }

        const key = count.join('#');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }

    return Array.from(map.values());
};

// Time Complexity: O(n * k)
// Space Complexity: O(n * k)
