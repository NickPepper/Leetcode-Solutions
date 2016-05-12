// Difficulty: Easy

/*
290. Word Pattern (https://leetcode.com/problems/word-pattern/)

Given a 'pattern' and a string 'str', find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in 'pattern' and a non-empty word in 'str'.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.

Notes: You may assume 'pattern' contains only lowercase letters, and 'str' contains lowercase letters separated by a single space.
*/


/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var dict = {},
        used = {},
        strArr = str.split(' ');
    if(pattern.length !== strArr.length) {
        return false;
    }
    for(var i = 0; i < strArr.length; i++) {
        if(!dict[strArr[i]]) {
            if(used[pattern[i]]) {
                return false;
            } else {
                used[pattern[i]] = true;
            }
            dict[strArr[i]] = pattern[i];
        } else {
            if(dict[strArr[i]] !== pattern[i]) {
                return false;
            }
        }
    }
    return true;
};
