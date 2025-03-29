const missingNumber = (arr) =>{
    let n = arr.length
    let expectedSum = (n * (n+1))/2
    let actualSum = arr.reduce((acc,curr)=>acc+curr,0)
    return expectedSum - actualSum
}
console.log(missingNumber([0,1,3])) // 2
console.log(missingNumber([0,1]))   // 2