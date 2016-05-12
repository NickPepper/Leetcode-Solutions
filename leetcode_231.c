// Difficulty: Easy

/*
231. Power of Two (https://leetcode.com/problems/power-of-two/)

Given an integer, write a function to determine if it is a power of two.
*/


/*
// LeetCode:
bool isPowerOfTwo(int n) {
    while (((n & 1) == 0) && n > 1) // While n is even and > 1
        n >>= 1;
    return (n == 1);   
}
*/


// Standalone variant:
// gcc -Wall -std=c99 leetcode_231.c -O3 -o leetcode_231

#include <stdio.h>

/*
 * Dividing a binary integer by 2 is the same as shifting it right one bit,
 * and checking whether a binary integer is odd is the same as checking if its least significant bit is 1.
*/
int main(void)
{
    int n;
    printf("Enter the number: ");
    scanf("%d", &n);
    while (((n & 1) == 0) && n > 1) {// While n is even and > 1
        n >>= 1;
    }
    printf("Is power of 2: %s.\n", (n == 1) ? "true" : "false" );
}
