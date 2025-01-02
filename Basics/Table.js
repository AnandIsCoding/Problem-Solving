//  **Description**: Write a program to generate multiplication tables for a given number.  
//     **Example**:  
//     Input: `number = 4`  
//     Output:  
//     ```
//     4 x 1 = 4  
//     4 x 2 = 8  
//     4 x 3 = 12  
//     4 x 4 = 16  
//     4 x 5 = 20  
//     ```  

const generateMultiplicationTable = (number) =>{
    for(let i=1;i<=10;i++){
        console.log(`${number} X ${i} = ${number*i}`)
    }
    return '✌️completed'
}
const result = generateMultiplicationTable(4)
console.log(result)