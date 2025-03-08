const reversePart = (arr,start,end) =>{
    while(start < end){
        [arr[start],arr[end]] = [arr[end],arr[start]]
        start++
        end--
    }
    return arr
}

const RightRotate = (arr,d) =>{
    reversePart(arr,0,arr.length-d-1)
    reversePart(arr,arr.length-d,arr.length-1)
    reversePart(arr,0,arr.length-1)
    return arr
}

console.log(RightRotate([1, 2, 3, 4, 5],2))

