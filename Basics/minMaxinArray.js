// **Description**: Write a program to find the largest and smallest numbers in an array.  
//     **Example**:  
//     Input: `array = [4, 7, 1, 8, 5]`  
//     Output: `Largest: 8, Smallest: 1`  
//     Explanation: The largest number in the array is 8 and the smallest is 1. 


let minMax = (arr) =>{
    if(arr.length < 1) return []
    let min = arr[0], max = arr[0]
    for(let i=1;i<arr.length-1;i++){
       if(max < arr[i]) max = arr[i]
       if(min > arr[i]) min = arr[i]
    }
    return `min ${min} max ${max}`
}
const result = minMax([4, 7, 1, 8, 5])
console.log(result)