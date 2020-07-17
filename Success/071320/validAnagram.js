
// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// solution:

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    let first = s.split('').sort().join('')
    let second = t.split('').sort().join('')
    
    return first === second
};

// alt solution with Map:

function isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const sMap = createMap(s);
    const tMap = createMap(t);
    
    for (const [char, count] of sMap) {
      if (tMap.get(char) !== count) {
        return false;
      }
    }
  
    return true;
  }
  
  function createMap(str) {
    const map = new Map();
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const count = map.get(char) || 0;
      map.set(char, count + 1);
    }
  
    return map;
  }