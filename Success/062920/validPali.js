// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false
 

// Constraints:

// s consists only of printable ASCII characters.

//solution: 

var isPalindrome = function(s) {
    str = s.replace(/[^\w\s]|_/g, "")
    .toLowerCase()
    .replace(/\s+/g, '')
    return str === str.split('').reverse().join('')
};