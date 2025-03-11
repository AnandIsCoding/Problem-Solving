const maxSubArraySum = (arr) =>{
    let currentSum = 0, maximumSum= -Infinity

    for(let i=0;i<arr.length;i++){
        currentSum = currentSum+arr[i]
        if(currentSum < 0){
            currentSum=0
        }
        maximumSum = Math.max(currentSum,maximumSum)
    }
    return maximumSum
}
console.log(maxSubArraySum([-2,-3,4,-1,-2,1,5,-3]))


// 1️⃣ Keep Adding Elements to currentSum
// Start with currentSum = 0 and add each element one by one.
// 2️⃣ If currentSum Goes Negative, Reset it to 0
// A negative sum will not contribute positively to the future subarrays.
// So, if currentSum < 0, reset it to 0.
// 3️⃣ Track the Maximum Sum Seen So Far (maximumSum)
// Compare currentSum with maximumSum and update it whenever currentSum is larger.