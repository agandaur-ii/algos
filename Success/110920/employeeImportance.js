
// You are given a data structure of employee information, which includes the employee's unique id, their importance value and their direct subordinates' id.

// For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3. They have importance value 15, 10 and 5, respectively. Then employee 1 has a data structure like [1, 15, [2]], and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []]. Note that although employee 3 is also a subordinate of employee 1, the relationship is not direct.

// Now given the employee information of a company, and an employee id, you need to return the total importance value of this employee and all their subordinates.

// Example 1:

// Input: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
// Output: 11
// Explanation:
// Employee 1 has importance value 5, and he has two direct subordinates: employee 2 and employee 3. They both have importance value 3. So the total importance value of employee 1 is 5 + 3 + 3 = 11.
 

// Note:

// One employee has at most one direct leader and may have several subordinates.
// The maximum number of employees won't exceed 2000.

// solution: 

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let result = 0
    let target = employees.filter(emp => emp.id === id)[0]
    result += target.importance

    let checkSubs = function(subsArray) {
        for (sub of subsArray) {
            let currentSub = employees.filter(emp => emp.id === sub)[0]
            result += currentSub.importance
            let subs = currentSub.subordinates
            if (subs) checkSubs(subs)
        }
    }
    
    checkSubs(target.subordinates)

    return result
};