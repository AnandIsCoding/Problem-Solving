const missingNumber = (seq) =>{
    let n = seq.length - 1
     let sumOfNatural = (n * (n + 1)) / 2;
    let sumOfSeq = seq.reduce((acc,curr)=> acc+curr,0)
    return  Math.abs(sumOfSeq - sumOfNatural)
}
console.log(missingNumber([1,2,3,4,5,3]))   

// Normally, the sum of numbers from 1 to n is calculated using the formula:
// sum = 𝑛(𝑛+1)2  sum=2n(n+1)​ 
// The given sequence contains one extra number (the duplicate), making the total sum larger than expected.
// By subtracting the expected sum from the actual sum, the extra (duplicate) number is found.
// 🚀 Time Complexity: 𝑂
// (𝑛)
// O(n) (since we only loop once).
// 🔍 Space Complexity: 
// 𝑂(1) (only a few variables used).