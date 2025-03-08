//  1️⃣ Left Rotate (Counter-clockwise)
//  Shifts elements to the left.
//  First d elements move to the end.


const reversePart = (arr,from,to) =>{
    while(from < to){
        [arr[from],arr[to]] = [arr[to],arr[from]]
        from++
        to--
    }
    return arr
}

const LeftRotateArray = (arr,d) =>{
    reversePart(arr,0,d-1)
    reversePart(arr,d,arr.length-1)
    reversePart(arr,0,arr.length-1)
    return arr
}
console.log(LeftRotateArray([1,2,3,4,5],2))