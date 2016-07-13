// Difficulty: Easy

/*
326. Power of Three (https://leetcode.com/problems/power-of-three/)

Given an integer, write a function to determine if it is a power of three.
Follow up: Could you do it without using any loop / recursion?
*/


/**
 * Approach #1 - Loop Iteration
 * The most common for 99% of developers (stupid) brute force solution.
 *
 * Complexity Analysis:
 * --------------------
 * Time complexity: O(log_b(n)). (in our case that is O(log_3n))) - the number of divisions is given by that logarithm.
 *
 * Space complexity: O(1) - no additional memory is used
 */
var isPowerOfThree = function(n) {
    // lets omit the NaN checking etc - this is just a LeetCode task but not the production code
    if(n === 0) return false;
    while (n % 3 === 0) n /= 3;
    return n == 1;
};



/**
 * Approach #2 - Base Conversion
 * My favorite.
 * This is an universal approach to determine if the given number N is a power of B.
 * Lets convert the number N to base B and check if it is written as a leading 1 followed by all 0.
 *
 * Complexity Analysis:
 * --------------------
 * Time complexity: O(log_3n).
 * - Number.toString() - base conversion is generally implemented as a repeated division. The complexity of should be similar to approach #1: O(log_3n).
 * - RegEx.test() - method iterates over the entire string. The number of digits in the base 3 representation of n is O(log_3n).
 *
 * Space complexity: O(log_3n).
 * Two additional variables are used:
 * - the string of the base 3 representation of the number (size log_3n)
 * - the string of the regular expression (constant size).
 */
var isPowerOfThree = function(n) {
    // lets omit the NaN checking etc
    return /^10*$/gi.test((n).toString(3));
};



/**
 * Approach #3 - Mathematics
 * (for those who likes the math formulas etc)
 *
 * Complexity Analysis:
 * --------------------
 * Time complexity: UNKNOWN - the expensive operation here is Math.log10(), which upper bounds the time complexity of our algorithm.
 *
 * Space complexity: O(1) - no additional memory is used
 */
var isPowerOfThree = function(n) {
    // lets omit the NaN checking etc
    return (Math.log10(n) / Math.log10(3)) % 1 == 0;
};



/**
 * Approach #4 - Integer Limitations
 * The most effective one.
 *
 * Complexity Analysis:
 * --------------------
 * Time complexity: O(1) - we are only doing one operation.
 * Space complexity: O(1) - no additional memory is used
 */
var isPowerOfThree = function(n) {
    // lets omit the NaN checking etc
    return n > 0 && 1162261467 % n == 0;
};

