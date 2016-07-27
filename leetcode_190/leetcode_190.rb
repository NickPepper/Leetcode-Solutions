# Difficulty: Easy --> REALLY?!

=begin
190. Reverse Bits (https://leetcode.com/problems/reverse-bits/)

Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), 
return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up: If this function is called many times, how would you optimize it?
=end

# @param {Integer} n, a positive integer
# @return {Integer}
def reverse_bits(n)
    re = 0
    for i in 0..32
        re = (re << 1) | (n & 1)
        n = n >> 1
    end
    return re >> 1
end

# Your runtime beats 41.67% of ruby submissions.
