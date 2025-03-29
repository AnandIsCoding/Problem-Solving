let maxBitwise = (arr) =>{
    let max = -Infinity
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if((arr[i] & arr[j]) > max){
                max = arr[i] & arr[j]
            }
        }
    }
    return max
}
console.log(maxBitwise([2,3,4,5,6]))   // 4
console.log(maxBitwise([10, 12, 6, 8]))  // 8