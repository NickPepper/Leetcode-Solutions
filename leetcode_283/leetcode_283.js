// Difficulty: Easy

/*
283. Move Zeroes (https://leetcode.com/problems/move-zeroes/)

Given an array nums, write a function to move all 0's to the end of it
while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/


// Time Limit Exceeded (!)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     var i = 0,
//         l = nums.length;
//     while(i < l) {
//         if(!nums[i]) {
//             nums.splice(i, 1);
//             nums.push(nums[i]);
//             i++;
//         }
//     }
// };


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var fill    = 0,
        cur     = 0,
        size    = nums.length;

    if(!size) return;

    while (cur < size) {
        if (nums[cur] !== 0) {
            nums[fill++] = nums[cur];
        }
        ++cur;
    }
    while (fill < size) {
        nums[fill++] = 0;
    }
};

