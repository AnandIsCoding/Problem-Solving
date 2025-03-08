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








const minElement = (arr,min,index) =>{
    if(index == arr.length){
        return min
    }
    if(arr[index] < min){
        min = arr[index]
    }
    return minElement(arr,min,index + 1)
 }
 console.log(minElement([1,2,3,9,9,0,4],Infinity,0))