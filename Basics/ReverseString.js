//  **Description**: Write a program to reverse a given string.  
//     **Example**:  
//     Input: `string = "programming"`  
//     Output: `"gnimmargorp"`  
//     Explanation: The reversed string of "programming" is "gnimmargorp".


const reverseString = (str) =>{
    let reversed = ''
    for(let i=str.length-1;i>=0;i--){
        reversed += str[i]
    }
    return reversed;
}
const result = reverseString('programming')
console.log(result)