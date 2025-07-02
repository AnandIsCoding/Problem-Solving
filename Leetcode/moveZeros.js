var moveZeroes = function(nums) {
    let startingIndex = 0
    for(let i=0;i<nums.length;i++){
        if( nums[i] !== 0){
            [nums[startingIndex] , nums[i]] = [nums[i] , nums[startingIndex]]
            startingIndex++
        }
    }
    return nums
};



//  keep a pointer at 0 index , ***startingIndex = 0***
//  iterate through each element and if element is not 0 than swap with startingIndex and increase the startungIndex pointer
//  at last all non Zeros will be shifted to start and all Zeros will be moved to End !! 😊