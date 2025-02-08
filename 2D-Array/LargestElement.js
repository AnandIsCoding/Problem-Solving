// Task Title:
// Find the Maximum Value in a 2D Array

// Task Description:
// Implement a function findMaxInArray that takes a two-dimensional array as input and finds the maximum value within it. The function iterates through each element in the nested arrays, comparing values to determine the highest number. The solution utilizes a nested loop to traverse all elements and updates the maximum value accordingly.

// [[1,2,3,4],[6,7,90,8,9],[3,78,74,27,3]]   should give 90 as max


const findMaxInArray = (arr) =>{
    let max = -Infinity 
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j] > max){
                max = arr[i][j]
            }
        }
    }
    return max
 }
 console.log(findMaxInArray([[1,2,3,4],[6,7,90,8,9],[3,78,74,27,3]]))