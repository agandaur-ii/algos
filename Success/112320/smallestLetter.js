// Find Smallest Letter Greater Than Target

// Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

// Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

// Examples:
// Input:
// letters = ["c", "f", "j"]
// target = "a"
// Output: "c"

// Input:
// letters = ["c", "f", "j"]
// target = "c"
// Output: "f"

// Input:
// letters = ["c", "f", "j"]
// target = "d"
// Output: "f"

// Input:
// letters = ["c", "f", "j"]
// target = "g"
// Output: "j"

// Input:
// letters = ["c", "f", "j"]
// target = "j"
// Output: "c"

// Input:
// letters = ["c", "f", "j"]
// target = "k"
// Output: "c"
// Note:
// letters has a length in range [2, 10000].
// letters consists of lowercase letters, and contains at least 2 unique letters.
// target is a lowercase letter.

// my solution: 

var nextGreatestLetter = function(letters, target) {
    let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    let map = new Map()
    
    for (let i=0; i<alph.length; i++) {
        map.set(alph[i], i+1)
    }
    
    for (let i=0; i<letters.length; i++) {
        let t = alph.indexOf(target) + 1
        if (map.get(letters[i]) > t) return letters[i]
    }
    return letters[0]
};

// alt solution: 

var nextGreatestLetter = function(letters, target) {
    for(const letter of letters) {
        if(target < letter) {
            return letter
        }
    }
    return letters[0]
};