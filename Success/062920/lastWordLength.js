// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5

// solution: 

var lengthOfLastWord = function(s) {
    let split = s.split(' ')
    for (let i=split.length -1; i >=0; i--) {
        if (split[i].length > 0)
        return split[i].length
    }
    return 0
};