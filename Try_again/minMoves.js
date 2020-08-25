// Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

// Example:

// Input:
// [1,2,3]

// Output:
// 3

// Explanation:
// Only three moves are needed (remember each move increments two elements):

// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

//found solution: 

/*thinking:
This problem can be reversed to think. 
Add 1 to n-1 elements according to the intention of the question.
In fact, we can think of it as subtracting 1 from the remainder.
Add：[1,2,3] => [2,3,3] => [3,4,3] => [4,4,4]
Subtracted：[1,2,3] =>  [1,2,2] => [1,1,2] => [1,1,1]
↑ Find the smallest element first, and find the sum of the differences between all elements and the smallest element, 
which is the minimum  moves.
*/

var minMoves = function(nums) {
    if(nums == null || nums.length<=1) return 0;
    let min = nums[0]
    let sum = 0
    for( i = 0;i< nums.length;i++){
        sum += nums[i]
        min = Math.min(min,nums[i])
    }
    return sum-min*nums.length
};