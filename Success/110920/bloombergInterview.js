// Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative, non-zero) difference. Return the difference.
// Only check values of A2 - A1

// solution 1: 

let minDiff = function(a1, a2) {
    let a1s = a1.sort((a,b) => a-b)
    let a2s = a2.sort((a,b) => a-b)
  
    let min = Infinity
    for (let i=0; i<a1s.length; i++) {
      for (let j=0; j<a2s.length; j++) {
        let check = a2s[j] - a1s[i]
        if (check === 1) return check
        if (check > min) break
        if (check < min && check > 0) min = check
      }
    }
  
    if(min === Infinity) return "none"
    return min
}

// optimized solution for slightly different, but similar algo:

let minDiff = function(a1, a2) {
    let a1s = a1.sort((a,b) => a-b)
    let a2s = a2.sort((a,b) => a-b)
  
    let i=0;
    let j=0;
    let min = Infinity;
  
    while (i < a1s.length && j < a2s.length)
    {
      let diff = Math.abs(a1s[i] - a2s[j]);
      if (diff < min)
          min = diff;
      
      // Move the smaller array's index forward
      if (a1s[i] < a2s[j])
          i++;
      else
          j++;
    }
    if (min === Infinity) return "none"
    return min
  }

