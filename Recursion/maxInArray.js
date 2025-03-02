const findMax = (arr,index,max) =>{
    if(index >= arr.length) return max
    if(arr[index] > max){
        max = arr[index]
        return findMax(arr,index+1,max)
    }else{
        return findMax(arr,index+1,max)
    }
}
console.log(findMax([1,2,3,4,8,4,5,6,7],0,0))