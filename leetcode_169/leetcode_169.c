// Difficulty: Easy

/*
169. Majority Element (https://leetcode.com/problems/majority-element/)

Given an array of size n, find the majority element.
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

int majorityElement(int* nums, int numsSize) {
    int maj = 0, cnt = 1;
    for(int i = 1; i < numsSize; i++) {
        cnt += nums[i] == nums[maj] ? 1 : -1;
        if(!cnt) {
            maj = i;
            cnt = 1;
        }
    }
    return nums[maj];
}
