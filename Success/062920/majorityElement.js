// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

//solution:

var majorityElement = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    nums.sort((a,b)=>a-b)
    let result = 0
    let max = 0
    let count = 1
    for (let i=0; i<nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            count++
        } else {
            count = 1
        }
        if (count>max) {
            max = count
            result = nums[i]
        }
    }
    return result
};

// alt solution: 

var majorityElement = function(nums) {
    let sorted = nums.sort((a, b) => a - b)
    return sorted[Math.floor(nums.length / 2)]
};