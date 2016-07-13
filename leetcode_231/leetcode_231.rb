
def is_power_of_two_complement_and_compare_method(n)
    return (n != 0) && ((n & (~n + 1)) == n)
end


def is_power_of_two_decrement_and_compare_method(n)
	return (n != 0) && !(n & (n - 1))
def
