/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0, max = nums[0]
    for(let num of nums){
         sum = Math.max(num, sum + num); // decide whether to continue or start new subarray
         max = Math.max(max, sum);
    }
    return max
};