// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

//found solution: 

var longestCommonPrefix = function(strs) {   
	if (strs[0] === undefined) return "";
	
	strs.sort();
	
	let first = strs[0];
	let last = strs[strs.length - 1];
	let result = "";

	for (let i = 0; i < first.length; i++) {
		if (first[i] != last[i]) return result;
		result += first[i];
	} 

	return result;
};