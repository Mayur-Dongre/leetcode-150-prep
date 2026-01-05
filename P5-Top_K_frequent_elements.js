// Problem Statement

// Given an integer array nums and an integer k,
// return the k most frequent elements.
// You may return the answer in any order.

// Example
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Input: nums = [1], k = 1
// Output: [1]

const topKFrequent = function(nums, k) {
    const map = new Map(); // num -> frequency
    
    // Count frequencies
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    // Create buckets where index = frequency
    const buckets = Array(nums.length + 1).fill(null).map(() => []);
    for (let [num, freq] of map) {
        buckets[freq].push(num);
    }
    
    // Collect k most frequent elements from highest frequency
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
        }
    }
    
    return result.slice(0, k);
};

/////////////////////////////////////////////////
// Time & Space Complexity
// Time Complexity: O(n)
//   n = length of nums array
// Space Complexity: O(n)
/////////////////////////////////////////////////

// Alternative (Heap/Priority Queue)
const topKFrequent = function(nums, k) {
    const map = new Map();
    
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    // Sort by frequency descending
    return Array.from(map.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(entry => entry[0]);
};

/////////////////////////////////////////////////
// Time Complexity: O(n log n)
// Space Complexity: O(n)
