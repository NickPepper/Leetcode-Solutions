// Difficulty: Easy

/*
231. Power of Two (https://leetcode.com/problems/power-of-two/)

Given an integer, write a function to determine if it is a power of two.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // lets omit the NaN checking etc
    return /^10*$/gi.test((n).toString(2));
};
