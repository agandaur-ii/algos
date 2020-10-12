// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

 

// Example 1:

// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

// Note:

// 0 ≤ N ≤ 30.

// found solution:

var fib = function(N) {
    let array = [0, 1];
    for (i = 2; i <= N; i++) {
      array[i] = array[i - 1] + array[i - 2];
    }
    return array[N];
};

// alt solution:

var fib = function(N) {
    var memo = {}
    var helper = (x) => {
      if(memo[x]) return memo[x]
      if(x==1 || x==0) return x
      return memo[x] = helper(x-1) + helper(x-2)
    }
    return helper(N)
}