var kthLargestNumber= function(nums, k) {
    // Your code goes here
    if(nums.length < k) return -1
    nums.sort((a,b)=>b-a)
    return nums[k-1]
};