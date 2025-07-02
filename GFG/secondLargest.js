const secondLargest = (arr) => {
    let max = -Infinity, smax = -Infinity
    if(arr.length<=1) return arr
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            smax = max
            max = arr[i]
        }else if(arr[i]>smax && arr[i]<max) smax = arr[i]
    }
    return smax
}
console.log(secondLargest([10,20,20]))

// in else if arr[i]<max is necessary when array contains duplicates




// Time complexity is O(n)
// Space complexity is O(1) 