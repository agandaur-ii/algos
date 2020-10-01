// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard.

// Example:

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
 

// Note:

// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.

// solution: 

var findWords = function(words) {
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M"]
    ]
    let output =[]
    
    for (let i=0; i<words.length; i++) {
        let allUpper = words[i].toUpperCase()
        let check = true
        
        if (keyboard[0].includes(allUpper[0])) {
            for (let j=1; j<allUpper.length; j++) {
                if (!keyboard[0].includes(allUpper[j])) {
                    check = false
                    break
                }
            }
            if (check) output.push(words[i])
            
        } else if (keyboard[1].includes(allUpper[0])) {
            for (let j=1; j<allUpper.length; j++) {
                if (!keyboard[1].includes(allUpper[j])) {
                    check = false
                    break
                }
            }
            if (check) output.push(words[i])
            
        } else {
            for (let j=1; j<allUpper.length; j++) {
                if (!keyboard[2].includes(allUpper[j])) {
                    check = false
                    break
                }
            }
            if (check) output.push(words[i])   
        }
    }
    return output 
};

// alt solution: 

var findWords = function(words) {
    const row1 = new Set(['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'])
    const row2 = new Set(['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'])
    const row3 = new Set(['Z', 'X', 'C', 'V', 'B', 'N', 'M'])
    
    const results = []
    
    for (const word of words) {
        const split = word.toUpperCase().split('')
        
        if (split.every(l => row1.has(l))) {
            results.push(word)
        }
        
        if (split.every(l => row2.has(l))) {
            results.push(word)
        }
        
        if (split.every(l => row3.has(l))) {
            results.push(word)
        }
    } 
    
    return results
};