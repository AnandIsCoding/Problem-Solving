const linearSearch = (arr,index,target) =>{
    if(index === arr.length){
        return -1
    }
    if(arr[index] === target){
        return index
    }
    return linearSearch(arr,index+1,target)
}
console.log(linearSearch([1,2,3,5,7,2],0,9))  // -1
console.log(linearSearch([1,2,3,5,7,2],0,7))  //  4