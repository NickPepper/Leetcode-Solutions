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

/*
// LeetCode:
int getSum(int a, int b) {
	int c;
	// Iterate till there is no carry  
    while (b != 0) {
        // carry now contains common set bits of 'a' and 'b'
        c = a & b;
        // Sum of bits of 'a' and 'b' where at least one of the bits is not set
        a = a ^ b;
        // Carry is shifted by one so that adding it to 'a' gives the required sum
        b = c << 1;
    }
    return a;
}
*/

/*
// recursive implementation:
int getSum(int a, int b) {
    return (b == 0) ? a : getSum( a ^ b, (a & b) << 1);
}
*/


// Standalone variant:
// gcc -Wall -std=c99 leetcode_371.c -O3 -o leetcode_371

#include <stdio.h>

int main()
{
   	int a, b, c;
   	printf("Enter the first integer: ");
   	scanf("%d", &a);
   	printf("Enter the second integer: ");
   	scanf("%d", &b);

	while (b != 0) {
        c = a & b;
        a = a ^ b;
        b = c << 1;
    }

   	printf("Summ is: %d.", a);
   	printf("\n");
   	return 0;
}
