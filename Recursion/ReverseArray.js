
const reverseArray = (arr,start = 0, end = arr.length-1) =>{
    // base case
    if(start >= end){
        return arr
    }
    // processing 
    //swapping start and end
    [arr[start],arr[end]] = [arr[end],arr[start]]
    return reverseArray(arr,start+1,end-1)
}

console.log(reverseArray([1,2,3,4,5]))


// [ 5, 4, 3, 2, 1 ]