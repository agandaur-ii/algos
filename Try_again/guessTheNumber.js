// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I'll tell you whether the number is higher or lower.

// You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

// -1 : My number is lower
//  1 : My number is higher
//  0 : Congrats! You got it!
// Example :

// Input: n = 10, pick = 6
// Output: 6

// attempted solution (too slow) 

var guessNumber = function(n) {
    let result
    while (result !== 0) {
        let check = guess(n)
        if (check === 0) result = 0
        if (check === 1) {
            n++
        } else if(check === -1) {
            n--
        }
    }
    return n
};

// found solution: 

var guessNumber = function(n) {
    let start = 1;
    let end = n;
        
    while(start < end) {
            let mid = Math.floor((start + end) / 2)
            let result = guess(mid);
            if (result === 0) 
                return mid;
            else if (result === -1)
                end = mid - 1;
            else
                start = mid + 1;
    }
        
    return start; 
};