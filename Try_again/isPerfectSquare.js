// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

// found solution: 

var isPerfectSquare = function(num) {
    for(let i = 0; i <= num; i++) {
        if(i * i === num) {
            return true
        }
    }
    return false
};

// alt solution

var isPerfectSquare = function(num) {
    if (!num) return false;
    let currentNum = 1;
    let squaredNum = currentNum * currentNum;
    
    while (squaredNum <= num) {
        if (squaredNum === num) return true;
        currentNum++;
        squaredNum = currentNum * currentNum;
    }
    return false;
};
