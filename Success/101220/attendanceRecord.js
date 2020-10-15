// You are given a string representing an attendance record for a student. The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

// Example 1:
// Input: "PPALLP"
// Output: True
// Example 2:
// Input: "PPALLL"
// Output: False

// solution: 

var checkRecord = function(s) { 
    count = 0
    maxL = 0
    maxA = 0
    for (let i=0; i<s.length; i++) {
        if (s[i] === 'L') {
            count++
            if (count > maxL) maxL = count
        } else if (s[i] === 'A') {
            count = 0
            maxA++
        } else {
            count = 0
        }
    }
    if (maxL > 2 || maxA > 1) return false
    return true
};

// alt solution: 

var checkRecord = function(s) {
    let countingA = s.split('A');
    let consecutivesL = s.split('LLL');
    return countingA.length<3 && consecutivesL.length<=1;
};