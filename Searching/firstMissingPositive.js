var firstMissingPositive = function(nums) {
    let start=0,end = nums.length-1, ans = -1
    while(start<=end){
        let mid = start + Math.floor((end-start)/2)
        if(nums[mid] === mid) start = mid+1
        else{
            ans = mid
            end = mid - 1
        }
    }
    return ans
};
console.log(firstMissingPositive([0,1,3,4,5,6,7]))