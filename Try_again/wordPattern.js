// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

// attempt: 

var wordPattern = function(pattern, str) {
    let array = str.split(' ')
    let pLength = pattern.length
    if (pLength !== array.length) return false
    
    let patternMap = new Map()
    for (let i=0; i<pLength; i++) {
        if (patternMap.has(pattern[i])) {
            if (patternMap.get(pattern[i]) !== array[i] ) return false
        } else {
            if (patternMap.get(pattern[i-1]) === array[i]) return false
            //if (patternMap.values().includes(array[i])) return false
            patternMap.set(pattern[i], array[i])
            console.log(patternMap.values())
        }
    }
    return true
    
};

// found solution: 

var wordPattern = function(pattern, str) {
    const pat = pattern.split("");
    const words = str.split(" ");
    
    if(pat.length!=words.length)
        return false;
    const len = pat.length;
    let dict = {};
    
    for(let i=0;i<len;i++) {
        if(pat[i] in dict) {
            if(dict[pat[i]]!=words[i])
                return false;
        }else {
            dict[pat[i]] = words[i];
        }
    }
    
    //check for all entries if theyre unique
    let cache = [];
    for(let char in dict) {
        if(cache.includes(dict[char]))
            return false;
        cache.push(dict[char]);
    }
    
    return true;
};