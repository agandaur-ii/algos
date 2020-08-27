// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

// found solution: 

var hammingDistance = function(x, y) {
    return countSetBit(x ^ y); //bit diff XOR
};
var countSetBit = function(n){
    let count = 0;
    while (n > 0){
        count += n & 1; //Add last bit of the number to the sum of set bits.
        n >>= 1; // Shift number right by one bit to investigate other bits.
    }
    return count;
}