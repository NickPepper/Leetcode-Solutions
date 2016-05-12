// Difficulty: Easy

/*
104. Maximum Depth of Binary Tree (https://leetcode.com/problems/maximum-depth-of-binary-tree/)

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    if (root.left === null) {
        return maxDepth(root.right) + 1;
    }
    if (root.right === null) {
        return maxDepth(root.left) + 1;
    }
    return Math.max( maxDepth(root.right), maxDepth(root.left) ) + 1;
};

/*
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    if (root.left === null) {
        return minDepth(root.right) + 1;
    }
    if (root.right === null) {
        return minDepth(root.left) + 1;
    }
    return Math.min( minDepth(root.right), minDepth(root.left) ) + 1;
};
*/
