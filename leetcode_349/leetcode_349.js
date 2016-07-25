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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var shortA, longA, res = [];

    if(nums2.length > nums1.length) {
        shortA  = nums1;
        longA   = nums2;
    } else {
        shortA  = nums2;
        longA   = nums1;
    }

    for(var i = 0, l = longA.length; i < l; i++) {
        if(shortA.indexOf(longA[i]) >= 0 && res.indexOf(longA[i]) < 0) {
            res.push(longA[i]);
        }
    }
    return res;
};

// Your runtime beats 99.09% of javascript submissions. ;)
