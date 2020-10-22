// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

 

// Example 1:

// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 2
// Example 3:

// Input: nums = [1,1,1,1]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -109 <= nums[i] <= 109

// solution: 

var findLHS = function(nums) {
    if ([...new Set(nums)].length < 2) return 0
    sorted = nums.sort((a,b) => a-b)
    count = 0
    selfcount = 0
    max = 0
    
    for (let i=0; i<sorted.length; i++) {
        current = sorted[i]
        for (let j=i; j<sorted.length; j++) {
            if (sorted[j] === current) {
                selfcount++
            } else if (sorted[j] === current+1) {
                count += selfcount + 1
                selfcount = 0
                if (count > max) max = count
            } else {
                count = 0
                selfcount = 0
                break
            }
        }
        count = 0
        selfcount = 0
    }
    return max
};

// alt solution using Map

var findLHS = function(nums) {
    if (nums.length === 0) return 0
    
    const map = new Map()
    let res = 0
    
    for (const num of nums) {
      map.set(num, map.has(num) ? map.get(num) + 1 : 1)
    }
    
    for (let key of map.keys()) {
      if (map.has(key + 1)) {
        res = Math.max(res, map.get(key) + map.get(key + 1))
      }
    }
    
    return res
};