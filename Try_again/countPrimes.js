// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

// found solution: 

var countPrimes = function(n) {
    
    if(n < 3) return 0
    if(n < 4) return 1
    
    const primes = [2,3]

    //any prime can be represented as 6n+1 or 6n-1 where n is an integer except for 2 and 3
    for(let i=5; i < n; i++) {
        if((i + 1) % 6 === 0 || (i - 1) % 6 === 0) {
            let isPrime = true
			//factors of a number should be less than or equal to it's square root
            for(let j=0; j < primes.length && primes[j] <= Math.sqrt(i); j++) {
                if(i % primes[j] === 0) {
                    isPrime = false
                    break
                }
            }
            if(isPrime) {
                primes.push(i)
            }
        }
    }
    return primes.length
};