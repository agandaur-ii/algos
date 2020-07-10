// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// found solution: 

var containsNearbyDuplicate = function(nums, k) {
    if (!nums) return false;
    if (new Set(nums).size != nums.length){
        for (var  i = 0; i < nums.length; i++) {
            for (var j = i+1; j <= i+k && j < nums.length; j++) {
                if (nums[j] == nums[i]) return true;
            }
        }
        return false;
    }
    return false;
};

// another solution: 

var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        let x = nums[i]
        if(map.has(x)){
            if(i - map.get(x) <= k)return true
            else map.set(x, i)
        }else map.set(x, i)
    }
    return false
};