const peakElement = (nums) =>{
    let start=0,end = nums.length-1
    while(start<end){
        let mid = start + Math.floor((end-start)/2)
        if(nums[mid] < nums[mid+1]){
            start = mid+1
        }else{
            end = mid
        }
    }
    return start
}
console.log(peakElement([1,2,1,3,5,6,4]))  // 5 or 1
console.log(peakElement([1,2,3,1]))        // 2
console.log(peakElement([1,2,3]))          // 2
console.log(peakElement([3,2,1]))          // 0
console.log(peakElement([10]));            // 0
console.log(peakElement([]));              // 0