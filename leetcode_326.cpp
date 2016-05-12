// Difficulty: Easy

/*
326. Power of Three (https://leetcode.com/problems/power-of-three/)

Given an integer, write a function to determine if it is a power of three.
Follow up: Could you do it without using any loop / recursion?
*/


/*
// LeetCode:
class Solution {
public:
    bool isPowerOfThree(int n) {
        return n > 0 && 1162261467 % n == 0;
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
    cout << "Is power of 3: " << ((n > 0 && 1162261467 % n == 0) ? "true" : "false") << endl;
    return 0;
}
