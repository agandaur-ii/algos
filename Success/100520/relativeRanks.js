// Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

// Example 1:
// Input: [5, 4, 3, 2, 1]
// Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
// Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
// For the left two athletes, you just need to output their relative ranks according to their scores.
// Note:
// N is a positive integer and won't exceed 10,000.
// All the scores of athletes are guaranteed to be unique.

// solution: 

var findRelativeRanks = function(nums) {
    let clone = [...nums]
    clone.sort((a,b)=> b-a)
    console.log(clone)
    for (let i=0; i<nums.length; i++) {
        if (nums[i] === clone[0]){
            nums.splice(i,1,"Gold Medal")
        } else if (nums[i] === clone[1]) {
           nums.splice(i,1,"Silver Medal") 
        } else if (nums[i] === clone[2]) {
           nums.splice(i,1,"Bronze Medal") 
        } else {
            let check = clone.indexOf(nums[i])
            nums.splice(i,1,`${check+1}`)
        }
    }
    return nums
};