// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
//Follow up:
// Coud you solve it without converting the integer to a string?

//solution:

var isPalindrome = function(x) {
    if (x.toString().length === 1) {
        return true    
    }
    
    let result = []
    let copy = x
    while (copy > 0) {
        let num = copy%10
        result.push(num)
        copy = (copy - num)/10
    }
    
    if (parseInt(result.join('')) === x) {
        return true
    } else {
        return false
    }
};

//no string converstion solution

  if (x < 0) {
    return false;
  }
  let result = 0;
  let count = x;
  while (count !== 0) {
    let num = count % 10;
    result = result * 10 + num
    count = Math.floor(count / 10)
  }
  if (result === x ){
    return true;
  } else {
    return false;
  }