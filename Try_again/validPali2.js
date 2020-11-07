// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

// found solution:

function validPalindrome(s) {
    let left = 0, right = s.length-1;
    while (left < right) {
        if (s[left] !== s[right]) {            
            // 1st case: delete left char
            // 2nd case: delete right char
            return (isPalindrome(left+1, right, s) 
                   || isPalindrome(left, right-1, s));
        }
        left++, right--;
    }
    return true;
    // Time Complexity: O(n)
	// Space Complexity: O(1)
};

function isPalindrome(left, right, s) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++, right--;
    }
    return true;
}