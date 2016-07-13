// Difficulty: Easy

/*
258. Add Digits (https://leetcode.com/problems/add-digits/)

Given a non-negative integer 'num', repeatedly add all its digits until the result has only one digit.

For example:
Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up: Could you do it without any loop/recursion in O(1) runtime?

HINT:
1. A naive implementation of the above process is trivial. Could you come up with other methods? 
2. What are all the possible results?
3. How do they occur, periodically or randomly?
4. You may find this Wikipedia article - https://en.wikipedia.org/wiki/Digital_root - useful :)
*/

/*
// LeetCode:
int addDigits(int num) {
    return (--num % 9)+1;
}
*/


// Standalone variant:
// gcc -Wall -std=c99 leetcode_258.c -O3 -o leetcode_258

#include <stdio.h>

int main(void)
{
   int num;
   printf("Enter the number: ");
   scanf("%d", &num);
   printf("The digital root is %d.\n", ((--num % 9) + 1) );
}
