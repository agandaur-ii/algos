// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

// Example 1:

// Input: "Hello"
// Output: "hello"
// Example 2:

// Input: "here"
// Output: "here"
// Example 3:

// Input: "LOVELY"
// Output: "lovely"

// solution: 

var toLowerCase = function(str) {    
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i)
        
        if (ascii >= 65 && ascii <= 90) {
            result += String.fromCharCode(ascii + 32)
        } else {
            result += str.charAt(i)
        }
    }
    
    return result;
};