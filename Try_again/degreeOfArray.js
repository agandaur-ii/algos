// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

// Constraints:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.

// found solution: 

var findShortestSubArray = function(nums) {
    let m = new Map(), left = new Map(), right = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (left.get(num) === undefined) left.set(num, i);
        right.set(num, i);
        m.set(num, m.get(num)+1 || 1);
    }
    let degree = Math.max(...Array.from(m.values()));
    let elems = Array.from(m.keys()).filter(num => m.get(num) === degree);
    let len = nums.length;
    for (let elem of elems) {
        len = Math.min(len, right.get(elem) - left.get(elem) + 1);
    }
    return len;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};