// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// found solution: 

// Function Explanations
// getDigits(num):
// The gist here is that if we have, for example, the number 219, we can split it mathematically using % and /, like so:

// Math.floor(219 / 10) --> 21
// 219 % 10 --> 9
// Specifically:

// Use num % 10 to extract number in the ones position and push it to the digits array
// Overwrite num with Math.floor(num /10) to give us the rest of the number
// Return digits
// getSquaredTotal(numbers):
// We can take advantage of the reduce() array method here to iterate over numbers and additively square each digit.

// isHappy(n):
// After defining the previous two helper functions, isHappy()'s main job is to do two things:

// Return true if n becomes equal to 1
// Return false if we're in a loop, AKA, if we see the same number twice
// #2 works because we know that getSquaredTotal() will produce the same result each time it receives a given input (this is known as a Pure Function), so we know we're stuck in a loop if we see a result from this function twice.

// There are a number of ways to track duplicates, and here we use Javascript's Set() object to take advantage of Set.has(). As soon as seen.has() returns true, we can return false.

// Otherwise, we'll eventually return true when n === 1.

// The Solution

var getDigits = (num) => {
    const digits = [];
    while (num > 0) {
      digits.push(num % 10);
      num = Math.floor(num / 10);
    }
    return digits;
  };
  
  var getSquaredTotal = (digits) => {
    return digits.reduce((total, digit) => total + digit * digit, 0);
  };
  
  var isHappy = function(n) {
    const seen = new Set();
    while (n !== 1) {
      let digits = getDigits(n);
      n = getSquaredTotal(digits);
      if (seen.has(n)) {
        return false;
      }
      seen.add(n);
    }
    return true;
  };

  //other found solution:

  var isHappy = function(n) {
    let arr = [], sum = sumOfDigits(n);
    while (!arr.includes(sum)) {
        if (sum === 1) return true;
        arr.push(sum);
        sum = sumOfDigits(sum);
    }
    return false;
};

var sumOfDigits = function(num) {
    let sum = 0;
    while (num > 0) {
        sum += Math.pow((num % 10), 2);
        num = Math.floor(num / 10);
    }
    return sum;
}