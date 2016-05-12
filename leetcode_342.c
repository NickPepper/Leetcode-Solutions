// Difficulty: Easy

/*
342. Power of Four (https://leetcode.com/problems/power-of-four/)

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?
*/


/*
// LeetCode:
bool isPowerOfFour(int num) {
    return num && !(num & (num - 1)) && (num & 0x55555555);
}
*/


// Standalone variant:
// gcc -Wall -std=c99 leetcode_342.c -O3 -o leetcode_342

#include <stdio.h>

int main(void)
{
   int n;
   printf("Enter the number: ");
   scanf("%d", &n);
   printf("Is power of 4: %s.\n", (n && !(n & (n - 1)) && (n & 0x55555555)) ? "true" : "false" );
}
