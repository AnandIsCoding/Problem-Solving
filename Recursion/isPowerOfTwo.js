var isPowerOfTwo = function(n) {
    // if(n<=0) return false
    // return (n & (n-1)) === 0

    if(n === 1) return true
    if(n % 2 !== 0|| n<=0 ) return false
    return isPowerOfTwo(n/2)
};
console.log(isPowerOfTwo(6))
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(1))