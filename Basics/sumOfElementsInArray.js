// **Description**: Write a program to find the sum of elements in an array.  
//     **Example**:  
//     Input: `array = [1, 2, 3, 4, 5]`  
//     Output: `15`  

const sumOfArray = (arr) =>{
    let sum = 0
    arr.forEach((item)=>{
        sum += item
    })
    return sum
}
const result = sumOfArray([1, 2, 3, 4, 5])
console.log(result)