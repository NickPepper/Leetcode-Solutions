// Difficulty: Easy

/*
013. Roman To Integer (https://leetcode.com/problems/roman-to-integer/)

Given a roman numeral, convert it to an integer.
Input is guaranteed to be within the range from 1 to 3999.
*/


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var res = 0,
        val = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};

    for (var i = 0, l = s.length; i < l; i++) {
        if (i > 0 && val[s[i]] > val[s[i - 1]]) {
            res += val[s[i]] - 2 * val[s[i - 1]];
        } else {
            res += val[s[i]];
        }
    }
    return res;
};
