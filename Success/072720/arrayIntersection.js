// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

// solution:

var intersection = function(nums1, nums2) {
    let n1 = [...new Set(nums1)]
    let n2 = [...new Set(nums2)]
    let solution = []
    if (n1.length <= n2.length) {
        for(let i=0; i<n1.length; i++) {
            if (n2.includes(n1[i])) {
                solution.push(n1[i])
            }
        }
    } else {
        for(let i=0; i<n2.length; i++){
            if (n1.includes(n2[i])) {
                solution.push(n2[i])
            }
        }
    }
    return solution
};

// alt solution: 

let intersection = function(nums1, nums2) {
    let firstSet = new Set(nums1);
  
    let intersectionSet = new Set();
  
    for (let num of nums2) {
      if (firstSet.has(num)) {
        intersectionSet.add(num)
      }
    }
  
    return Array.from(intersectionSet)
  };