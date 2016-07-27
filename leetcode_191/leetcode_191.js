// Difficulty: Easy

/*
191. Number of 1 Bits (https://leetcode.com/problems/number-of-1-bits/)

Write a function that takes an unsigned integer and returns the number of ’1' bits it has 
(also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, 
so the function should return 3.
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // 'parallel' or 'variable-precision SWAR algorithm'
    n = n - ((n >> 1) & 0x55555555);
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
    return (((n + (n >> 4)) & 0x0F0F0F0F) * 0x01010101) >> 24;
};

// Your runtime beats 98.31% of javascript submissions.

/*
// an alternative variant:
var hammingWeight = function(n) {
    var bin = n.toString(2), cnt = 0;
    for(var i = 0, l = bin.length; i < l; i++) {
        if(bin[i] == '1') cnt ++;
    }
    return cnt;
};
// Your runtime beats 94.07% of javascript submissions.
*/


/*
// an alternative variant:
var hammingWeight = function(n) {
    var cnt = 0;
    while(n !== 0) {
        n = n & (n-1);
        // use x & (x-1) to determine if an integer is a power of two
        // every time you perform the operation x & (x-1), a single 1 bit is erased
        cnt++;
    }
    return cnt;
};
*/
