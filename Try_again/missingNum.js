// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

// found solution:

// Sub-Optimal:
// Time Complexity: O(n^2)? Depends on browser sort
// idea: sort the numbers, and store them in a set. Iterate through the list,
// and check if i exists in the set, if not, return it.
// otherwise the last number is missing, return it
const missingNumber = function (nums) {
    nums.sort((a, b) => a - b);
    let set = new Set(nums);
    for (let i = 0; i <= nums[nums.length - 1]; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
    return nums.length;
};

// Optimal
// Time Complexity: O(n)
const missingNumber = function (nums) {
    // Sum arr
    const currNum = nums.reduce((a, b) => {
        return a + b
    });

    // total is the sum of nums, assuming there is NO number missing
    let total = 0;

    // summing 0 does nothing, and we must account for every element in nums.length so we use <=
    for (let i = 1; i <= nums.length; i++) {
        total += i;
    }

    // total is the sum of nums without a missing number, and currNum is the sum with the missing number
    // finding the difference between these two numbers will give us the missing number that is not in nums
    return total - currNum;
};

console.log(missingNumber[9, 6, 4, 2, 3, 5, 7, 0, 1]); // 8