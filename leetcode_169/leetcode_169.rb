# Difficulty: Easy

=begin
169. Majority Element (https://leetcode.com/problems/majority-element/)

Given an array of size n, find the majority element.
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
=end

# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
    maj = 0
    cnt = 1
    for i in 1..nums.length-1
        cnt += (nums[i] == nums[maj]) ? 1 : -1
        if cnt == 0 then
            maj = i
            cnt = 1
        end
    end
    return nums[maj]
end

# Your runtime beats 65.79% of ruby submissions.
