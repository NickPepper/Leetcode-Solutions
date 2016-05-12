// Difficulty: Easy

/*
110. Balanced Binary Tree (https://leetcode.com/problems/balanced-binary-tree/)

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree 
in which the depth of the two subtrees of every node never differ by more than 1.
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    /**
     * @return {int} tree's height
     * return -1 if depth differ of the two subtrees are more than 1
     */
    function treeHeight(node) {
        if(node === null) {
            return false;
        }
        if(node.left === null && node.right === null) {
            return true;
        }
        var leftH = treeHeight(node.left);
        var rightH = treeHeight(node.right);
        if(leftH === -1 || rightH === -1) {
            return -1;
        }
        if(Math.abs(leftH - rightH) > 1) {
            return -1;
        }
        
        return Math.max(leftH, rightH) + 1;
    }
    
    return treeHeight(root) === -1 ? false : true;
};
