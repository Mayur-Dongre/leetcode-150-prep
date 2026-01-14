// Problem Statement

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const isPalindrome = function (s) {
	let left = 0;
	let right = s.length - 1;
	
	while (left < right) {
	
		// Skip non-alphanumeric characters from the left	
		while (left < right && !isAlphanumeric(s[left])) {
			left++;
		}

		// Skip non-alphanumeric characters from the right
		while (left < right && !isAlphanumeric(s[right])) {
			right--;
		}

		if (s[left].toLowerCase() !== s[right].toLowerCase()) {
			return false;
		}
		left++;
		right--;
	}

	return true;
};

const isAlphanumeric = (char) => {
	return /[a-z0-9]/i.test(char);
};

/////////////////////////////////////////////////
// Time & Space Complexity
// Time Complexity: O(n)
// Space Complexity: O(1)
/////////////////////////////////////////////////
