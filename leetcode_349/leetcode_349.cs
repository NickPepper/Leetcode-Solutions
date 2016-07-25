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
    public int[] Intersection(int[] nums1, int[] nums2) {
        int[] shortA, longA;
        List<int> res = new List<int>(); // fuck this Java-like shit btw...

        if(nums2.Length > nums1.Length) {
            shortA  = nums1;
            longA   = nums2;
        } else {
            shortA  = nums2;
            longA   = nums1;
        }

        for(int i = 0, l = longA.Length; i < l; i++) {
            if(Array.IndexOf(shortA, longA[i]) >= 0 && !res.Contains(longA[i])) {
                res.Add(longA[i]);
            }
        }
        return res.ToArray();
    }
}
