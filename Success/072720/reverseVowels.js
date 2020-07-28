// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".

// solution: 

var reverseVowels = function(s) {
    let vowels = []
    let array = s.split('')
    for (let i=0; i<array.length; i++) {
        if(
           array[i]==="a" || 
           array[i]==="e" || 
           array[i]==="i" || 
           array[i]==="o" || 
           array[i]==="u" ||
           array[i]==="A" || 
           array[i]==="E" || 
           array[i]==="I" || 
           array[i]==="O" || 
           array[i]==="U" 
          ) {
            vowels.push(s[i])
            array.splice(i,1,"*")
        }
    }
    
    for (let i=0; i<array.length; i++) {
        if(array[i]==="*"){
            array.splice(i,1,vowels.pop())
        }
    }
    
    return array.join('')
};

// alt solution: 

var reverseVowels = function(s) {
    s = s.split('');
    
    let left = 0;
    let right = s.length - 1;
    
    while (true) {
      left = findNextVowelIdx(s, left, 1);
      right = findNextVowelIdx(s, right, -1);
      
      if (left >= right) break;
      
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      
      left++;
      right--;
    }
    
    return s.join('')
  };
  
  var findNextVowelIdx = function(s, idx, dir) {
    const vowels = 'aeiouAEIOU';
    while (idx >= 0 && idx < s.length  && !vowels.includes(s[idx])) {
      idx += dir
    }
    return idx
  }