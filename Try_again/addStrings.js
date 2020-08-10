// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

// found answer: 

let addStrings = (num1, num2) => {
    let carry = 0,
      result = '',
      len1 = num1.length - 1,
      len2 = num2.length - 1;
    for (; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--) {
      // we convert string to numner using unary `+` operator
      let sum = (+num1[len1] || 0) + (+num2[len2] || 0) + +carry;
      if (sum > 9) {
        [carry, sum] = ('' + sum).split('');
      } else {
        carry = 0;
      }
      result = `${sum}${result}`;
    }
    return '' + result;
  };