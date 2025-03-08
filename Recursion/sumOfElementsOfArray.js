const sumOfElements = (arr,index) =>{
    if(index===arr.length-1){
        return arr[index]
    }
    return arr[index] + sumOfElements(arr,index+1)
}
console.log(sumOfElements([1,2,3,0],0))   //  ------------>> 6