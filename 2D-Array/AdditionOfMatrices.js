// Task: Matrix Addition in JavaScript

// Description: Write a function AdditionOfMatrices(arr1, arr2) that takes two 2D arrays (matrices) of the same dimensions and returns a new matrix where each element is the sum of the corresponding elements from the input matrices.

const AdditionOfMatrices = (arr1, arr2) =>{
    let sum = []
    for(let i=0;i<arr1.length;i++){
        sum[i]=[]
        for(let j=0;j<arr1[i].length;j++){
            sum[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return sum
 }
 console.log(AdditionOfMatrices([[1,2,3,4],[6,7,90,8]],[[3,4,8,74],[86,37,90,18]]))  // [ [ 4, 6, 11, 78 ], [ 92, 44, 180, 26 ] ]

 
 