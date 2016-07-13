// 'Complement And Compare' method
func isPowerOfTwo(n int) bool {
    return (n != 0) && ((n & (^n + 1)) == n);
}
