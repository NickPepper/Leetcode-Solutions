// Difficulty: Easy

/*
217. Contains Duplicate (https://leetcode.com/problems/contains-duplicate/)

Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array,
and it should return false if every element is distinct.
*/



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    /*
    var set = new Set();
    for(var i in nums) {
        if(set.has(nums[i])) {
            return true;
        } else {
            set.add(nums[i]);
        }
    }
    return false;
    */
    var accum = [];
    for(var i in nums) {
        if(accum.indexOf(nums[i]) !== -1) {
            return true;
        } else {
            accum.push(nums[i]);
        }
    }
    return false;
};
