// Difficulty: Easy

/*
349. Intersection of Two Arrays (https://leetcode.com/problems/intersection-of-two-arrays/)

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/

public class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        int[] shortA, longA, res = {};

        if(nums1.length <= nums2.length) {
            shortA  = nums1;
            longA   = nums2;
        } else {
            shortA  = nums2;
            longA   = nums1;
        }

        //
        // Java is really an ugly language which even has no indexOf(), push(), pop() etc by default (!)
        // That's just one of many reasons why I don't like this f... Java
        //
        for(int i = 0, l = longA.length; i < l; i++) {
            //if( ArrayUtils.indexOf(shortA, longA[i]) >= 0 && ArrayUtils.indexOf(res, longA[i]) < 0) {
            if( Arrays.asList(shortA).contains(longA[i]) && !Arrays.asList(res).contains(longA[i]) ) {
                res[res.length] = longA[i];
            }
        }
        return res;
    }
}

// Submission Result: Wrong Answer -> FUCK THIS SHIT called Java ;)
