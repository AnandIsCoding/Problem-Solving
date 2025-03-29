const transitionPoint = (arr) =>{
    let start=0,end=arr.length-1, ans = -1
    while(start<=end){
        let mid = start + Math.floor((end-start)/2)
        if(arr[mid] === 1){
            ans = mid
            end = mid-1
        }else if(arr[mid] ===0){
            start = mid+1
        }
    }
    return ans
}
console.log(transitionPoint([0,0,0,1,1]))   // 3
console.log(transitionPoint([0,0,0,0]))     //-1
console.log(transitionPoint([]))            //-1
console.log(transitionPoint([1]))           //0
console.log(transitionPoint([0]))           //-1

