// Task Title:
// Calculate the Sum of All Elements in a 2D Array

// Task Description:
// Write a JavaScript function that takes a two-dimensional array as input and returns the sum of all its elements. The function should iterate through each row and column, adding up all the values to compute the total sum.

const SumOfElements = (arr) =>{
    let sum = 0
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            sum += arr[i][j]
        }
    }
    return sum
 }
 console.log(SumOfElements([[1,2,3,4],[6,7,90,8,9],[3,78,74,27,3]]))


//✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨

 const SumOfElementsUsingForEach = (arr) =>{
    let sum = 0
    arr.forEach((elem)=>{
        elem.forEach((val)=>{
            sum += val
        })
    })
    return sum
 }
 console.log(SumOfElementsUsingForEach([[1,2,3,4],[6,7,90,8,9],[3,78,74,27,3]]))