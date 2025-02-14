// **Description**: Write a program to sort an array of numbers in ascending order.
//     **Example**:  
//     Input: `array = [3, 1, 4, 1, 5, 9]`  
//     Output: `[1, 1, 3, 4, 5, 9]`  
//     Explanation: The array sorted in ascending order is [1, 1, 3, 4, 5, 9].  


//using array.sort method

const sorting = (arr) =>{
    arr.sort((a,b)=>{
        return a-b
    })
    return arr
}
const result = sorting([3, 1, 4, 1, 5, 9])
console.log(result)
