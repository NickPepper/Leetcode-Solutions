// Difficulty: Easy

/*
171. Excel Sheet Column Number (https://leetcode.com/problems/excel-sheet-column-number/)
*/


/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var codeA   = "A".charCodeAt(),
        power   = 0,
        result  = 0,
        ch      = null;
    
    //s = s.toUpperCase();
    for(var i = s.length - 1; i > -1; i--, power++) {
        ch = s[i];
        result += ( ch.charCodeAt() - codeA + 1 ) * Math.pow(26, power);
    }

    return result;
};
