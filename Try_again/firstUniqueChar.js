// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// found solution:

var firstUniqChar = function(s) {
    let repeatingChars = [];
    for (i = 0; i < s.length; i++) {
        let char = s[i];
        if (!s.slice(i+1).includes(char) && !repeatingChars.includes(char)) 
            return i;
        else repeatingChars.push(char);
    }
    return -1;
};