// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

//found solution: 

var plusOne = function(digits) {
	// iterate through the array from last element to first
    for (let i = digits.length - 1; i >= 0; i--) {
		// increment the element
        digits[i]++;
		// if element is less than 10 and not the leftmost element, end iteration and return the array
        if (digits[i] < 10 && digits[i] !== 0) return digits;
		// element must be >10, so decrease by 10. No need to create a "carry" variable, because each iteration assumes the element needs to be incremented.
        digits[i] = 0;
		// if this is the leftmost element, we need to add one more element to the left to catch the carry
        if (i === 0) {
            digits.unshift(1)
            return digits;
        }
    }
};