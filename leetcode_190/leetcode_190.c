// Difficulty: Easy --> REALLY?!

/*
190. Reverse Bits (https://leetcode.com/problems/reverse-bits/)

Reverse bits of a given 32 bits unsigned integer.

For enample, given input 43261596 (represented in binary as 00000010100101000001111010011100), 
return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up: If this function is called many times, how would you optimize it?
*/

uint32_t reverseBits(uint32_t n) {
    int re = 0;
    for(int i = 0; i < 32; i++) {
        re = (re << 1) | (n & 1);
        n >>= 1;
    }
    return re >> 0;
}
// Your runtime beats 18.31% of c submissions.


/*
// Reverse bits the obvious way:
// O(logn)
uint32_t reverseBits(uint32_t n) {
    uint32_t r = n; // r will be reversed bits of n; first get LSB of n
    int s = sizeof(n) * CHAR_BIT - 1; // extra shift needed at end

    for (n >>= 1; n; n >>= 1) {
        r <<= 1;
        r |= n & 1;
        s--;
    }
    return r <<= s; // shift when v's highest bits are zero
}
// Your runtime beats 18.31% of c submissions.
*/


/*
// the typical solution - Bit Swaps:
// O(1)
uint32_t reverseBits(uint32_t n) {
    n = ((n >> 1) & 0x55555555u) | ((n & 0x55555555u) << 1);
    n = ((n >> 2) & 0x33333333u) | ((n & 0x33333333u) << 2);
    n = ((n >> 4) & 0x0f0f0f0fu) | ((n & 0x0f0f0f0fu) << 4);
    n = ((n >> 8) & 0x00ff00ffu) | ((n & 0x00ff00ffu) << 8);
    n = ((n >> 16) & 0xffffu) | ((n & 0xffffu) << 16);
    return n;
}
// Your runtime beats 18.31% of c submissions.
*/


/*
// Method1 – Simple:
// Time Complexity: O(log n)
// Space Complexity: O(1)
uint32_t reverseBits(uint32_t n) {
    unsigned int  NO_OF_BITS = sizeof(n) * 8;
    unsigned int reverse_num = 0;
    int i;
    for (i = 0; i < NO_OF_BITS; i++)
    {
        if((n & (1 << i)))
           reverse_num |= 1 << ((NO_OF_BITS - 1) - i);  
   }
    return reverse_num;
}
// Your runtime beats 18.31% of c submissions.
*/


/*
// Method 2 – Standard
// Time Complexity: O(log n)
// Space Complexity: O(1)
uint32_t reverseBits(uint32_t n) {
    unsigned int count = sizeof(n) * 8 - 1;
    unsigned int reverse_num = n;
     
    n >>= 1;
    while(n) {
       reverse_num <<= 1;       
       reverse_num |= n & 1;
       n >>= 1;
       count--;
    }
    reverse_num <<= count;
    return reverse_num;
}
// Your runtime beats 18.31% of c submissions.
*/
