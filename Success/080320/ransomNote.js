// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// You may assume that both strings contain only lowercase letters.

// solution: 

var canConstruct = function(ransomNote, magazine) {
    //create a map of ransomNote that counts the number of times a letter appears
    let r = new Map()
    for (let i=0; i<ransomNote.length; i++) {
        if (r.has(ransomNote[i])) {
            r.set(ransomNote[i], (r.get(ransomNote[i]))+1)
        } else {
            r.set(ransomNote[i], 1)
        }
    }
    //do the same for magazine
    let m = new Map()
        for (let i=0; i<magazine.length; i++) {
        if (m.has(magazine[i])) {
            m.set(magazine[i], (m.get(magazine[i]))+1)
        } else {
            if (r.has(magazine[i])) {
                m.set(magazine[i], 1)
            }
        }
    }
    //if the Maps are different sizes, return false
    if (r.size !== m.size) return false
    //create an array of entries of both maps and sort them
    let rArray = []
    for (let entryR of r) {
        rArray.push(entryR)
    }
    let mArray = []
    for (let entryM of m) {
        mArray.push(entryM)
    }
    rArray.sort(), mArray.sort()
    //if the value of a letter in the ransomNote is higher than the value of that same letter in the magazine, return false
    for(let i=0; i<rArray.length; i++) {
        if (rArray[i][1] > mArray[i][1]) return false
    }
    return true
};

// alt solution:

var canConstruct = function(ransomNote, magazine) {
    let ransom = new Map();
    for(let c of ransomNote){
      if(!ransom.has(c)) ransom.set(c, 0);
      ransom.set(c, ransom.get(c)+1);
    }
    for(let c of magazine){
      if(ransom.has(c)){
        ransom.set(c, ransom.get(c)-1);
        if(ransom.get(c) <= 0) ransom.delete(c);
      }
    }
    if(ransom.size) return false;
    return true;
  };
  