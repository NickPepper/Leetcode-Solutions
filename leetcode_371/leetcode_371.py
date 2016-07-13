"""
Difficulty: Easy

371. Sum of Two Integers (https://leetcode.com/problems/sum-of-two-integers/)

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.


////////////////////////////////////////////////////////////////////////////////
// Sum of two bits can be obtained by performing XOR (^) of the two bits.
// Carry bit can be obtained by performing AND (&) of two bits.
////////////////////////////////////////////////////////////////////////////////
"""

class Solution(object):
    def getSum(self, a, b):
        """
        :type a: int
        :type b: int
        :rtype: int
        """
        while (b != 0):
            c = a & b
            a = a ^ b
            b = c << 1
        return a

        """
        WTF? Time Limit Exceeded ??? LOL
        """

        """
        Puthon SUXX with recursion ;)))
        if (b == 0)
            return a
        else
            return getSum( a ^ b, (a & b) << 1)
        """
