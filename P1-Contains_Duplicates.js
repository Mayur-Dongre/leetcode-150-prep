// Problem Statement

// You are given an array of integers nums.
// Return true if any value appears more than once in the array.
// Return false if all elements are unique.

// Example
// Input:  nums = [1, 2, 3, 1]
// Output: true

// Input:  nums = [1, 2, 3, 4]
// Output: false

const containsDuplicate = function(nums) {
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return true; // duplicate found
        }
        seen.add(num);
    }

    return false; // all elements are unique
};

/////////////////////////////////////////////////

// Time & Space Complexity
// Time Complexity: O(n)
// Space Complexity: O(n)

/////////////////////////////////////////////////

// Alternative (One-Liner)
const containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};
