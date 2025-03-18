const kthMissingNumber = (arr,k) =>{
    let missings = []
    let allNumbers = []
    for(let i=1;i<=arr[arr.length-1];i++){
        allNumbers.push(i)
    }
    for(let i=0;i<allNumbers.length;i++){
        if(!arr.includes(allNumbers[i])){
            missings.push(allNumbers[i])
        }
    }
    return missings.length > 0 ? missings[k-1] : arr[arr.length-1]+k
}
console.log(kthMissingNumber([2,3,4,7,11],5))   //  9
console.log(kthMissingNumber([1,2,3,4],2))      // 6




// arr = [2,3,4,7,11], k = 5

// Output:
// 9

