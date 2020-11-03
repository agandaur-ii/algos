// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Return the minimum element of this array.

 

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 5000
// -5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated at some pivot.

// solution: 

var findMin = function(nums) {
    return nums.sort((a,b) => a-b)[0]
};

// alt solution: 

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    // the goal is to use `left` to point at the minimun number    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
          left = mid + 1;
        } else {
          right = mid;
        }
    }

    return nums[left];
};