// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

// Example 1:

// Input: 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: 8
// Output: true
// Explanation: 8 = 2 × 2 × 2
// Example 3:

// Input: 14
// Output: false 
// Explanation: 14 is not ugly since it includes another prime factor 7.
// Note:

// 1 is typically treated as an ugly number.
// Input is within the 32-bit signed integer range: [−231,  231 − 1].

// found solution:

var isUgly = function(num) {
    if (num <= 0) return false;
    let factors = [], allowed = [2,3,5];
    while (num > 1) {
        if (num % 2 == 0) {
            factors.push(2);
            num = num / 2;
        }    
        else if (num % 3 == 0) {
            factors.push(3);
            num = num / 3;
        }
        else if (num % 5 == 0) {
            factors.push(5);
            num = num / 5;
        }
        else {
            factors.push(num);
            break;
        }
    }
    return factors.filter(x => {
        return allowed.includes(x) ? false : true;
    }).length == 0;
};

// alt solution:

var isUgly = function(num) {
    if(num === 0) {
        return false;
    }
    
    if(num === 1 || num === 2 || num === 3 || num === 5) {
        return true;
    }
    
    if(num % 2 === 0) {
        return isUgly(num / 2);
    }
    
    if(num % 3 === 0) {
        return isUgly(num / 3);
    }
    
    if(num % 5 === 0) {
        return isUgly(num / 5);
    }
    
    return false;
};
