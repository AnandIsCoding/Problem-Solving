const missingNumber = (nums) =>{
        // your Code Goes Here
    let n= nums.length
    let sumOfNaturalNumbers =  (n * (n + 1)) / 2;
    let sumOfNumbers = nums.reduce((acc,curr)=> acc+curr,0)
    return  Math.abs(sumOfNaturalNumbers - sumOfNumbers)
}
console.log(missingNumber([1,2,3,5]))   




// We assume the sequence should contain n = seq.length + 1 numbers.
// Compute the sum of the first n natural numbers using the formula 
// 𝑛(𝑛+1)/2
//  .
// Compute the sum of the given sequence using .reduce().
// The difference between the two sums gives the missing number.


