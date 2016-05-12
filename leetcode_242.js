// Difficulty: Easy

/*
242. Valid Ahagram (https://leetcode.com/problems/valid-anagram/)

Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    var sa = s.split("");
    var ta = t.split("");
    sa.sort();
    ta.sort();
    var os = sa.join("");
    var ot = ta.join("");
    return os === ot;
};
