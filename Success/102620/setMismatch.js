// The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]
// Note:
// The given array size will in the range [2, 10000].
// The given array's numbers won't have any order.


// solution:

var findErrorNums = function(nums) {
    sorted = nums.sort((a,b) => a-b)
    result = []
    
    for (let i=0; i<sorted.length; i++) {
        if (sorted[i] === sorted[i+1]) {
            result.push(sorted[i])
            break
        }
    }
    
    for (let i=0, count = 1; i<sorted.length; i++, count++) {
        if (sorted[i] !== count) {
            if (nums.includes(count) === false) {
                result.push(count)
                break
            }
        }
    }
    
    return result
};

//alt solution: 

var findErrorNums = function(nums) {
    // Formula to calculate sum of Airthmetic series
    let total = (1 + nums.length) * nums.length / 2;
    let m = new Map(), sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (m.has(nums[i])) var repeating = nums[i];
        else m.set(nums[i], 1);
        sum += nums[i];
    }
    let missing = total - (sum-repeating);
    return [repeating, missing];
};