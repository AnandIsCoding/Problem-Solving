/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length === 1) return 0
    let start = 0, end = nums.length-1
    while(start < end){
        let mid = Math.floor(start + (end-start)/2 )
        if( nums[mid]<nums[mid+1]){
           start = mid + 1
        }else{
            end = mid
        }
    }
    return start
};