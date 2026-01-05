// Problem Statement

// Design an algorithm to encode a list of strings to a single string.
// The encoded string is then decoded back to the original list of strings.
// Please implement encode and decode methods.

// Example
// Input: ["neet","code","love","you"]
// Output: ["neet","code","love","you"]
// Input: ["we","say",":","yes"]
// Output: ["we","say",":","yes"]

const encode = function(strs) {
    let encoded = '';
    for (let str of strs) {
        // Format: length + '#' + string
        encoded += str.length + '#' + str;
    }
    return encoded;
};

const decode = function(str) {
    const result = [];
    let i = 0;
    
    while (i < str.length) {
        // Find the delimiter '#'
        let j = i;
        while (str[j] !== '#') {
            j++;
        }
        
        // Extract the length
        const length = parseInt(str.slice(i, j));
        
        // Extract the string using the length
        const word = str.slice(j + 1, j + 1 + length);
        result.push(word);
        
        // Move to next encoded string
        i = j + 1 + length;
    }
    
    return result;
};

/////////////////////////////////////////////////
// Time & Space Complexity
// Encode Time Complexity: O(n)
//   n = total characters in all strings
// Decode Time Complexity: O(n)
// Space Complexity: O(n)
/////////////////////////////////////////////////

// Alternative (Using Delimiter with Escape Character)
const encode = function(strs) {
    // Use a delimiter that's unlikely to appear
    return strs.map(s => s.replace(/:/g, '::')).join(':;');
};

const decode = function(str) {
    if (str === '') return [''];
    return str.split(':;').map(s => s.replace(/::/g, ':'));
};

/////////////////////////////////////////////////
// Time Complexity: O(n)
// Space Complexity: O(n)
/////////////////////////////////////////////////
