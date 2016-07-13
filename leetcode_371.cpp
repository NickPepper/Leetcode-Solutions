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
class Solution {
public:
    int getSum(int a, int b) {
        while (b != 0) {
        	int c = a & b;
        	a = a ^ b;
        	b = c << 1;
    	}
    	return a;
    }
};
*/


// Standalone variant:
// g++ -Wall leetcode_371.c -O3 -o leetcode_371

#include <iostream>
using namespace std;

int main()
{
    int a, b, c;
    cout << "Enter the first integer: ";
    cin >> a;
    cout << "Enter the second integer: ";
    cin >> b;
    while (b != 0) {
        c = a & b;
        a = a ^ b;
        b = c << 1;
    }
    cout << "The sum is: " << a << endl;
    return 0;
}
