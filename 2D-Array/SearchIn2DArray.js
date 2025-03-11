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
