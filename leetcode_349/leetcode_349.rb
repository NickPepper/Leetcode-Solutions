# Difficulty: Easy

=begin
349. Intersection of Two Arrays (https://leetcode.com/problems/intersection-of-two-arrays/)

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
=end

# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Integer[]}
def intersection(nums1, nums2)
    res = []
    return res if !nums1.length or !nums2.length

    if nums2.length > nums1.length then
        shortA = nums1
        longA = nums2
    else
        shortA = nums2
        longA = nums1
    end

    for i in 0..longA.length-1
        if shortA.index(longA[i]) != nil and res.index(longA[i]) == nil then
            res << longA[i]
        end
    end

    return res
end
