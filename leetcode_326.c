// Difficulty: Easy

/*
326. Power of Three (https://leetcode.com/problems/power-of-three/)

Given an integer, write a function to determine if it is a power of three.
Follow up: Could you do it without using any loop / recursion?
*/


/*
// LeetCode:
bool isPowerOfThree(int n) {
    return n > 0 && 1162261467 % n == 0;
}
*/


// Standalone variant:
// gcc -Wall leetcode_326.c -O3 -o leetcode_326

#include <stdio.h>

int main(void)
{
   int n;
   printf("Enter the number: ");
   scanf("%d", &n);
   printf("Is power of 3: %s.\n", (n > 0 && 1162261467 % n == 0) ? "true" : "false" );
}
