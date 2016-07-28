// Difficulty: Easy

/*
7. Reverse Integer (https://leetcode.com/problems/reverse-integer/)

Reverse bits of a given 32 bits unsigned integer.

Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

click to show spoilers.

Have you thought about this?
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, 
then the reverse of 1000000003 overflows. How should you handle such cases?

For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

Update (2014-11-10):
Test cases had been added to test the overflow behavior.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (isNaN(parseInt(x))) return 0;
    if (x > -1 && x < 10) return x;
    var neg     = x < 0,
        i       = 0,
        xep     = (Math.abs(x) + "").split(""),
        l       = xep.length - 1,
        middle  = l / 2;
    while(i < middle) {
        xep[i]  = xep[i] ^ xep[l];
        xep[l]  = xep[i] ^ xep[l];
        xep[i]  = xep[i] ^ xep[l];
        i++;
        l--;
    }
    xep = +xep.join("");
    if(xep > 2147483647) return 0; // 32-bit overflow check (2147483647 == 0x7fffffff)
    return neg ? xep * -1 : xep;
};
// Your runtime beats 57.41% of javascript submissions.
