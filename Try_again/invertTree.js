// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// found solution: 

var invertTree = function(root) {
    
    function invert(node) {
        if(!node) return;
        
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        invert(node.left);
        invert(node.right);
    }

    invert(root);
    return root;
};
