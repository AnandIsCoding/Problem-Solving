const largestPrimeInDiagonal = (nums) =>{
    const prime = (num) =>{
        if(num <=1) return false
        if(num === 2) return true
        for(let i=2; i<= Math.sqrt(num);i++){
            if(num % i === 0) return false
        }
        return true
    }
    
    let maxPrime = -Infinity
    let n = nums.length
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums[i].length;j++){
            if(i === j){
                if(prime(nums[i][j]) && nums[i][j] > maxPrime){
                    maxPrime = nums[i][j]
                }
            }
            if(prime(nums[i][n-i-1]) && nums[i][n-i-1] > maxPrime){
                maxPrime = nums[i][n-i-1]
            }
        }
    }
    return maxPrime
}
console.log(largestPrimeInDiagonal([[4, 1, 8], [1, 9, 6], [7, 5, 10]]))



//Given a nums 2-D array, find the largest prime number located on either of the diagonals. A prime number is defined as a natural number greater than 1 that has no divisors other than 1 and itself. In case, no prime is present on any of the diagonals, return 0.
// Input:
// [[2, 4, 6], [8, 3, 10], [12, 14, 5]]

// Output:
// 5

// Explanation:
// The prime numbers present at diagonal are 2, 3, and 5; the largest prime is 5.

