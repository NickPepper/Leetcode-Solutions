// Difficulty: Easy

/*
350. Intersection of Two Arrays II (https://leetcode.com/problems/intersection-of-two-arrays-ii/)

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited
such that you cannot load all elements into the memory at once?
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var shortA, longA, res = [], hash = {};
    if(!nums1.length || !nums2.length) return res;

    if(nums2.length > nums1.length) {
        shortA  = nums1;
        longA   = nums2;
    } else {
        shortA  = nums2;
        longA   = nums1;
    }

    var xep = shortA.length;
    
    for(var i = 0; i < xep; i++) {
        hash[shortA[i]] = hash[shortA[i]] || 0;
        ++hash[shortA[i]];
    }

    for(var i = 0, l = longA.length; i < l && xep; i++) {
        if(hash[longA[i]]) {
            --hash[longA[i]];
            --xep;
            res.push(longA[i]);
        }
    }

    return res;
};

// Your runtime beats 93.55% of javascript submissions ;)
