// Difficulty: Easy

/*
258. Add Digits (https://leetcode.com/problems/add-digits/)

Given a non-negative integer 'num', repeatedly add all its digits until the result has only one digit.

For example:
Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up: Could you do it without any loop/recursion in O(1) runtime?

HINT:
1. A naive implementation of the above process is trivial. Could you come up with other methods? 
2. What are all the possible results?
3. How do they occur, periodically or randomly?
4. You may find this Wikipedia article - https://en.wikipedia.org/wiki/Digital_root - useful :)
*/


/**
 * NAIVE IMPLEMENTATION
 *
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) return num;
    var sum = 0;
    while(num) {
        sum += num%10;
        num = Math.floor(num/10);
    }
    return addDigits(sum);
};


/**
 * NOT NAIVE (mistical) IMPLEMENTATION
 *
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return --num % 9 + 1;
    // 'Your runtime beats 94.55% of JavaScript submissions' - huh :)
};
