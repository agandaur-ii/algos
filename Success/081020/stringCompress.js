// Given an array of characters, compress it in-place.

// The length after compression must always be smaller than or equal to the original array.

// Every element of the array should be a character (not int) of length 1.

// After you are done modifying the input array in-place, return the new length of the array.

 
// Follow up:
// Could you solve it using only O(1) extra space?

 
// Example 1:

// Input:
// ["a","a","b","b","c","c","c"]

// Output:
// Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

// Explanation:
// "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
 

// Example 2:

// Input:
// ["a"]

// Output:
// Return 1, and the first 1 characters of the input array should be: ["a"]

// Explanation:
// Nothing is replaced.
 

// Example 3:

// Input:
// ["a","b","b","b","b","b","b","b","b","b","b","b","b"]

// Output:
// Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

// Explanation:
// Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
// Notice each digit has it's own entry in the array.
 

// Note:

// All characters have an ASCII value in [35, 126].
// 1 <= len(chars) <= 1000.

// solution: 

var compress = function(chars) {
    if(chars.length===1) return 1
    let current = chars[chars.length - 1]
    let count = 1
    for (let i=chars.length -2; i>-1; i--) {
        if(chars[i]===current) {
            count++
        } else {
            if (count > 1) {
                chars.splice(i+2, count-1, `${count}`)
                current = chars[i]
                count = 1
            } else {
                current = chars[i]
            }
        }
    }
    if (count > 1) {
        chars.splice(1, count-1, `${count}`)
    }
    for (let i=chars.length -1; i>-1; i--) {
        if (chars[i].length > 1) {
            let num = [...chars[i]+'']
            chars.splice(i,1)
            for (let j=num.length -1; j>-1; j--) {
                chars.splice(i,0,num[j])   
            }
        }
    }
    return chars.length
};

// found better solution:

var compress = function(chars) {
  
    for(let i = 1; i < chars.length; i++) {
        if(chars[i] === chars[i-1][0]) {
            chars[i-1] += chars[i];
            chars.splice(i, 1);
            i--;
        }
    }
    
    for(let i = 0; i < chars.length; i++) {
        const len = chars[i].length;
        
        if(len > 1) {
            chars[i] = chars[i][0];
            chars.splice(i+1, 0, ...len.toString().split(''));
        }
    }
};
