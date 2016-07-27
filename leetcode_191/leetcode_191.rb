# Difficulty: Easy

=begin
191. Number of 1 Bits (https://leetcode.com/problems/number-of-1-bits/)

Write a function that takes an unsigned integer and returns the number of ’1' bits it has 
(also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, 
so the function should return 3.
=end

# @param {Integer} n, a positive integer
# @return {Integer}
def hamming_weight(n)
    cnt = 0
    while n != 0
        n = n & (n-1)
        cnt = cnt + 1
    end
    return cnt
end

# Your runtime beats 96.67% of ruby submissions.

=begin
# an alternative variant:
def hamming_weight(n)
    bin = n.to_s(2)
    cnt = 0
    for i in 0..bin.length
        if bin[i] == '1' then cnt = cnt + 1 end
    end
    return cnt
end
# Your runtime beats 13.33% of ruby submissions.
=end
