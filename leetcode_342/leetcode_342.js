// Difficulty: Easy

/*
342. Power of Four (https://leetcode.com/problems/power-of-four/)

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?
*/


/**
 * Approach: Base Conversion
 * My favorite.
 * This is an universal approach to determine if the given number N is a power of B.
 * Lets convert the number N to base B and check if it is written as a leading 1 followed by all 0.
 *
 * Complexity Analysis:
 * --------------------
 * Time complexity: O(log_4n).
 * - Number.toString() - base conversion is generally implemented as a repeated division. The complexity of should be similar to approach #1: O(log_3n).
 * - RegEx.test() - method iterates over the entire string. The number of digits in the base 4 representation of n is O(log_4n).
 *
 * Space complexity: O(log_4n).
 * Two additional variables are used:
 * - the string of the base 4 representation of the number (size log_4n)
 * - the string of the regular expression (constant size).
 */
var isPowerOfFour = function(n) {
    // lets omit the NaN checking etc
    return /^10*$/gi.test((n).toString(4));
};
