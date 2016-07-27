// Difficulty: Easy

/*
371. Sum of Two Integers (https://leetcode.com/problems/sum-of-two-integers/)

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.
*/


////////////////////////////////////////////////////////////////////////////////
// Sum of two bits can be obtained by performing XOR (^) of the two bits.
// Carry bit can be obtained by performing AND (&) of two bits.
////////////////////////////////////////////////////////////////////////////////

func getSum(a int, b int) int {
    if (b == 0) {
        return a;
    } else {
        return getSum( a ^ b, (a & b) << 1);
    }
}