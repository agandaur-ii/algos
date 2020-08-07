// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

// found solution: 

var longestPalindrome = function(s) {
    let m = new Map();
    for (i = 0; i < s.length; i++) {
        if (m.has(s[i])) m.delete(s[i]);
        else m.set(s[i],1);
    }
    let numberOfOdds = m.size;
    return numberOfOdds ? s.length - numberOfOdds + 1 : s.length;
    // We can have only one letter that repeats an odd number of times 
    // in a palindrome. Except for the one, we need to subtract one from
    // each odd number and make it even. So, we substract the number of odds
    // from the number of letters in a given string and lastly add one
    // because we can allow one letter that occurs an odd number of times.
    // If no letter in the given string occurs an odd number of times,
    // then we can just return the length of the given string because
    // we can make a palindrome using all letters if each letter occurs
    // an even number of times.
};