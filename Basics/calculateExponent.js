// **Description**: Write a program to calculate the power of a number.  
//     **Example**:  
//     Input: `base = 2`, `exponent = 3`  
//     Output: `8`  
//     Explanation: 2 raised to the power of 3 is 8.


const calculatePower = (base, exponent) =>{
    return base ** exponent
}
const result = calculatePower(2,3)
console.log(result)