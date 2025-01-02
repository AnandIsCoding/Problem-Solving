// **Description**: Write a program to find all prime numbers within a given range.  
// **Example**:  
// Input: `range = [10, 30]`  
// Output: `[11, 13, 17, 19, 23, 29]`  
// Explanation: Prime numbers between 10 and 30 are 11, 13, 17, 19, 23, and 29.  

let checkPrime = (number) => {
    number = Number(number);
    if (number <= 1) {
        return false;
    }
    if (number === 2) {
        return true; // 2 is prime
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Not a prime number
        }
    }
    return true; // Prime if no divisors found
};

const PrimesInRange = (start, end) => {
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (checkPrime(i)) {
            primes.push(i); // Add prime numbers to the list
        }
    }
    return primes;
};

const result = PrimesInRange(10, 30);
console.log(result); // Output: [11, 13, 17, 19, 23, 29]
