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
class Solution {
public:
    int addDigits(int num) {
        return (--num % 9) + 1;
    }
};
*/


// Standalone variant:
// g++ -Wall leetcode_326.c -O3 -o leetcode_326

#include <iostream>
using namespace std;

int main()
{
    int n;
    cout << "Enter the number: ";
    cin >> n;
    cout << "The digital root is: " << ((--num % 9) + 1) << endl;
    return 0;
}
