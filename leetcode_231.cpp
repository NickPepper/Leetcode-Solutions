// Difficulty: Easy

/*
231. Power of Two (https://leetcode.com/problems/power-of-two/)

Given an integer, write a function to determine if it is a power of two.
*/


/*
// LeetCode:
class Solution {
public:
    bool isPowerOfTwo(int n) {
        return ((n != 0) && !(n & (n - 1)));
    }
};
*/


// Standalone variant:
// g++ -Wall leetcode_231.cpp -O3 -o leetcode_231

#include <iostream>
using namespace std;

/*
 * Decrement And Compare method.
 * This function is a common one-liner you’ll find on the Web, 
 * and is how the check is implemented in malloc.c in the GNU C Library (glibc).
*/
int main()
{
    int n;
    cout << "Enter the number: ";
    cin >> n;
    bool res = (n != 0) && !(n & (n - 1));
    cout << "Is power of 2: " <<  (res ? "true" : "false") << endl;
    return 0;
}
