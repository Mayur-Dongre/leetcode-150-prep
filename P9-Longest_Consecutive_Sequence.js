// Problem Statement

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. 
// You must write an algorithm that runs in O(n) time.

// Example
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4. 

const longestConsecutive = function (nums) {
	const numSet = new Set(nums);
	let longest = 0;
	for (const n of nums) {

		// Check if n is the start of a sequence
		if (!numSet.has(n - 1)) {
			let length = 1;
			while (numSet.has(n + length)) {
				length++;
			}
			longest = Math.max(longest, length);
		}
	}
	return longest;
};

/////////////////////////////////////////////////
// Time & Space Complexity
// Time Complexity: O(n)
// Space Complexity: O(n)
/////////////////////////////////////////////////
