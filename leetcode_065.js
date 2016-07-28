// Difficulty: Hard

/*
65. Valid Number (https://leetcode.com/problems/valid-number/)

Validate if a given string is numeric.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
Note: It is intended for the problem statement to be ambiguous. 
You should gather all requirements up front before implementing one.
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    // LOL LOL LOL ;)
    return !!s.match(/^\s*[+-]?(\d+\.\d+|\d+\.|\.\d+|\d+)(\e[+-]?\d+)?\s*$/);
};
// Your runtime beats 92.96% of javascript submissions.
