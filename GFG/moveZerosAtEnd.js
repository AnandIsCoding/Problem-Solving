// not inplace 👍👍

const moveZerosAtEnd = (arr) =>{
    let arr2 = [], arr3 = []
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            arr2.push(arr[i])
        }else{
            arr3.push(arr[i])
        }
    }
    return [...arr2,...arr3]
}
console.log(moveZerosAtEnd([0,0,8,7,0,2,0,0,0,1]))


//in place 😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊
const moveZerosAtEndInPlace = (arr) =>{
    let startingIndex = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            [arr[startingIndex],arr[i]] = [arr[i],arr[startingIndex]]
            startingIndex++
        }
    }
    return arr
}

console.log(moveZerosAtEndInPlace([0,0,8,7,0,2,0,0,0,1]))