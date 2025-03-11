//  Search in 1D array 💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕

const LinearSearch = (arr,target) =>{
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target) return i
    }
    return -1
}
console.log(LinearSearch([1,2,3,4,5,6,7,8,9,12,13,34,45,67,78],5))   // 4
console.log(LinearSearch([1,2,3,4,5,6,7,8,9,12,13,34,45,67,78],67))  // 13
console.log(LinearSearch([1,2,3,4,5,6,7,8,9,12,13,34,45,67,78],60))  // -1


// Time Complexity = O(n)
// Space Complexity = O(1)


//  Search in 2D array 💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕

const TwoDlinearSearch = (arr,target) =>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j] === target){
                return [i,j]
            }
        }
    }
    return false
}
console.log(TwoDlinearSearch([[1,2,3],[2,5,78,8],[7,8,3,5]],78))   // [ 1, 2 ]


