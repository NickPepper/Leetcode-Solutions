// Difficulty: Easy

/*
169. Majority Element (https://leetcode.com/problems/majority-element/)

Given an array of size n, find the majority element.
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

public class Solution {
    public int MajorityElement(int[] nums) {
        int maj = 0, cnt = 1;
        for(int i = 1, l = nums.Length; i < l; i++) {
            cnt += (nums[i] == nums[maj]) ? 1 : -1;
            if(cnt == 0) {
                maj = i;
                cnt = 1;
            }
        }
        return nums[maj];
    }
}

// Your runtime beats 88.19% of csharp submissions.
