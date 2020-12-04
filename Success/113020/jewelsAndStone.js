// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

// my solution:

var numJewelsInStones = function(J, S) {
    let result = 0
    for (let i=0; i<J.length; i++) {
        for (let j=0; j<S.length; j++) {
            if (J[i] === S[j]) result++
        }
    }
    return result
};

// alt solution: 

var numJewelsInStones = function(J, S) {  
    let jewels = new Set(J)
    let count = 0
    
    for(let i=0; i<S.length; i++){
        if(jewels.has(S[i])){
            count ++
        }
    }
    return count
};