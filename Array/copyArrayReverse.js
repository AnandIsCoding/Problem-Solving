//using loops
const copyArrayReverse = (arr) =>{
    let rev = []
    for(let i=arr.length-1;i>=0;i--){
        rev.push(arr[i])
    }
    return rev
} 
console.log(copyArrayReverse([3,4,5,6,7,8,9]))



//using built in array reverse method
 const copyArrayReverse2 = (arr) =>{
    return arr.reverse()
} 
console.log(copyArrayReverse2([3,4,5,6,7,8,9]))



//     [ 9, 8, 7, 6, 5, 4, 3]