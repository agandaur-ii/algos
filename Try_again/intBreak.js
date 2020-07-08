
// Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

// Example 1:

// Input: 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.
// Example 2:

// Input: 10
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
// Note: You may assume that n is not less than 2 and not larger than 58.

// Clarion's solution:

var integerBreak = function(n) {
    //maximize number of 3s (such that remainder is NOT 1)
    //then complete with 2s
    if (n<3){
        return 1
    }
    if (n%3 === 0){
        return n===3 ? 2 : 3**(n/3)
    } else if (n%3 === 1){
        let numOf3s = Math.floor(n/3)-1
        return 4*(3**(numOf3s))
    } else {
        return 3**(Math.floor(n/3))*2
    }
};