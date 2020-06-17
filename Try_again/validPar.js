// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

//found solution:

var isValid = function(s) {
    if (s.length%2 !== 0) {
        return false
    }
    
    let array = []
    for (let i=0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            array.unshift(s[i])
        } else {
            if (s[i] === ")" && array[0] === "(") {
                array.shift()
            } else if (s[i] === "]" && array[0] === "[") {
                array.shift()
            } else if (s[i] === "}" && array[0] === "{") {
                array.shift()
            }
            
        }
    }
    if (array.length > 0) {
        return false
    }
    return true
};

