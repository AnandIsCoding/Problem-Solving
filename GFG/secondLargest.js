const Largest = (nums) =>{
    let max = -Infinity, smax = -Infinity
    for(let i=0;i<nums.length;i++){
        if(nums[i] > max){
            smax = max
            max = nums[i]
        }else if(nums[i] > smax && nums[i] < max){
            smax = nums[i]
        }
    }
    return {max,smax}
}

console.log(Largest([1,2,3,4,5,6,7,8,8]))    // { max: 8, smax: 7 }



// Time complexity is O(n)
// Space complexity is O(1) 