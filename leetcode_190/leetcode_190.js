// Difficulty: Easy --> REALLY?!

/*
190. Reverse Bits (https://leetcode.com/problems/reverse-bits/)

Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), 
return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up: If this function is called many times, how would you optimize it?
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var re = 0;
    for(var i = 0; i < 32; i++) {
        re = (re << 1) | (n & 1);
        n >>>= 1;
    }
    return re >>> 0;
};

// Your runtime beats 87.23% of javascript submissions.
