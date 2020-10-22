// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

 

// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".
// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
// Example 3:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]
// Example 4:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]
// Example 5:

// Input: list1 = ["KFC"], list2 = ["KFC"]
// Output: ["KFC"]
 

// Constraints:

// 1 <= list1.length, list2.length <= 1000
// 1 <= list1[i].length, list2[i].length <= 30
// list1[i] and list2[i] consist of spaces ' ' and English letters.
// All the stings of list1 are unique.
// All the stings of list2 are unique.

// solution: 

var findRestaurant = function(list1, list2) {
    // create 2 maps, logging the value and the index as the key and values, respectively
    let map1 = new Map()
    let map2 = new Map()
    
    for (let i=0; i<list1.length; i++) {
        map1.set(list1[i], i)
    }
    
    for (let i=0; i<list2.length; i++) {
        map2.set(list2[i], i)
    }
    // make a 3rd map that only includes values that are shared between map1 and map2
    // calculate the index sum and have that be map3's value for the shared key
    let map3 = new Map()
    
    for (let [key,value] of map1) {
        if (map2.has(key)) { 
            indexSum = map1.get(key) + map2.get(key)
            map3.set(key, indexSum)
        }
    }
    
    // create the higest possible value of favorites: where both lists are the same size
    // and the matching choice is in the last index of both lists
    let lowest = (map1.size > map2.size ? map1.size : map2.size) * 2
    // find the keys with the lowest index sums and return them
    let result = []
    for (let [key, value] of map3) {
        if (value === lowest) {
            result.push(key)
        } else if (value < lowest) {
            lowest = value
            result = []
            result.push(key)
        }
    }
    return result
};

// alt solution: 

var findRestaurant = function(list1, list2) {
    let minIndex = null;
    let result = [];
    let map = new Map();
    
    for(let i=0; i< list1.length;i++){
        map.set(list1[i], i)
    }
    

    for(let i=0; i< list2.length;i++){
        if(map.has(list2[i])){
            let value = map.get(list2[i]) + i
            if(minIndex === null || minIndex === value){
                result.push(list2[i])
                minIndex = value
            } else if(minIndex > value){
                result = []
                result.push(list2[i])
                minIndex = value
            }
        }
    }
    
    return result
};