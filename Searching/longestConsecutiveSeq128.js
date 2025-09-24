/**
 * @param {number[]} nums
 * @return {number}
 */

// suing set and without sorting ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
var longestConsecutive = function(nums) {
    if(nums.length  === 0) return 0
   let max = 0, set = new Set(nums)

   for(let num of set){
    if(!set.has(num-1)){
        let curr = num , streak = 1
        while(set.has(curr + 1)){
            curr++
            streak++
        }
        max = Math.max(max, streak)
    }
   }
   return max
};

// with soring ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
var longestConsecutive = function(nums) {
    let count = 1 , max = 1
    if(nums.length === 0) return 0
    nums = nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(nums[i+1] !== nums[i] && nums[i+1] - nums[i] === 1){
            count = count + 1
            max = Math.max(count, max)
        }
        if(nums[i+1] !== nums[i] && nums[i+1] - nums[i] !== 1){
            count = 1
        }
    }
    return max
};