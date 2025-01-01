//  **Description**: Write a program to check if a string or number is a palindrome.  
//   **Example**:  
//   Input: `string = "radar"`  
//   Output: `Palindrome`  
//   Explanation: "radar" reads the same backward as forward. 


const checkPallindrome = (input) =>{
    input = String(input)
    let inputforcheck = ''
    for(let i=input.length-1;i >= 0;i--){
        inputforcheck += input[i]
    }
    console.log(inputforcheck)
    return inputforcheck == input
}
const result = checkPallindrome(777)
console.log(result)