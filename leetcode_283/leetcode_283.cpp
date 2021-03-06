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


class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int fill = 0, cur = 0, sz = nums.size();
        while (cur < sz) {
            if (nums[cur] != 0) {
                nums[fill++] = nums[cur];
            }
            ++cur;
        }
        while (fill < sz) {
            nums[fill++] = 0;
        }
    }
};
