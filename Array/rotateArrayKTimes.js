const rotateArrayKTimes = (arr,k) =>{
    if(arr.length <= 1) return arr
    for(let i=0;i<k;i++){
        let lastelem = arr.pop()
        arr.unshift(lastelem)
    }
    return arr
}
console.log(rotateArrayKTimes([44,1,22,111],5))