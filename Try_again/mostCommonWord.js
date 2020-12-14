// Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

// Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

 

// Example:

// Input: 
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.
 

// Note:

// 1 <= paragraph.length <= 1000.
// 0 <= banned.length <= 100.
// 1 <= banned[i].length <= 10.
// The answer is unique, and written in lowercase (even if its occurrences in paragraph may have uppercase symbols, and even if it is a proper noun.)
// paragraph only consists of letters, spaces, or the punctuation symbols !?',;.
// There are no hyphens or hyphenated words.
// Words only consist of letters, never apostrophes or other punctuation symbols.

// my attempt:

var mostCommonWord = function(paragraph, banned) {
    let array = paragraph.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(' ')
    
    console.log(array)
    
    let map = new Map()
    
    for (let word of array) {
        if (banned.includes(word)) continue
        if (map.has(word)) {
            map.set(word, (map.get(word))+1)
        } else {
            map.set(word, 1)
        }
    }
    
    console.log(map)
    
    let max = Array.from(map.values()).sort((a,b) => b-a)[0]
    let result
    
    for (let [k, v] of map) {
        if (v === max) result = k
    }
    return result
};

// found solution:

var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.replace(/[^a-z]/gi,' ')
                .split(" ")
                .filter(word => word !== '');
    let m = new Map();
    let max = 0, res = "";
    for (let word of words) {
        let lowerCase = word.toLowerCase();
        m.has(lowerCase) ? m.set(lowerCase,m.get(lowerCase)+1)
                        : m.set(lowerCase,1);
        if (m.get(lowerCase) > max && !banned.includes(lowerCase)) {
            max = m.get(lowerCase);
            res = lowerCase;
        }
    }
    return res;
};