var removeDuplicates = function(nums) {
    let start = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i-1]<nums[i]){
            start = start+1
            nums[start] = nums[i]
        }
    }
    return start+1
};
let result = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
console.log(result)