# Difficulty: Easy

=begin
371. Sum of Two Integers (https://leetcode.com/problems/sum-of-two-integers/)

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.
=end


########################################################################
# Sum of two bits can be obtained by performing XOR (^) of the two bits.
# Carry bit can be obtained by performing AND (&) of two bits.
########################################################################

# @param {Integer} a
# @param {Integer} b
# @return {Integer}
def get_sum(a, b)
=begin
    while (b != 0)
        c = a & b
        a = a ^ b
        b = c << 1
    end
    return a
=end
    if (b == 0) then return a
    else return get_sum( a ^ b, (a & b) << 1)
    end
end

# Time Limit Exceeded ???? OMG LOL ON YOU RUBY :))))
