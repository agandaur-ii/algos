// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range:
// [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows

//solution:

var reverse = function(x) {
    let reversed = []
    let check = 1
    
    if (x < 0) {
        check = -1
        x = x * check
    }
    
    while (x > 0) {
        let num = x%10
        reversed.push(num)
        x = (x - num) / 10
    }
    
    let final = reversed.join('') * check
    
    if (final > 2147483647 || final < -2147483648) {
        return 0
    }
    return final
};

