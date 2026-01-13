// Problem Statement

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The algorithm must run in O(n) time and without using the division operation.

// Example
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

const productExceptSelf = function(nums) {
const n = nums.length;
const res = new Array(n).fill(1);

// Prefix products
let prefix = 1;
for (let i = 0; i < n; i++) {
res[i] = prefix;
prefix *= nums[i];
}

// Suffix products (multiplied into prefix result)
let suffix = 1;
for (let i = n - 1; i >= 0; i--) {
res[i] *= suffix;
suffix *= nums[i];
}
return res;
};

/////////////////////////////////////////////////
// Time & Space Complexity
// Time Complexity: O(n)
// Space Complexity: O(1)
/////////////////////////////////////////////////
