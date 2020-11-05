// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// found solution: 

var isSymmetric = function(root) {
    if(root===null) return true;
    return helper(root.left , root.right) 
};

var helper = function(tree1, tree2){
    if(tree1===null || tree2===null) return tree1===tree2
    if(tree1.val !==tree2.val) return false;
    return helper(tree1.left,tree2.right) && helper(tree1.right, tree2.left)
}