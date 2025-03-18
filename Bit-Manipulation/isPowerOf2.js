function isPowerOfTwo(n) {
    if (n <= 0) return false;  // Handle 0 and negative numbers
    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(3))
console.log(isPowerOfTwo(17))
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(8))