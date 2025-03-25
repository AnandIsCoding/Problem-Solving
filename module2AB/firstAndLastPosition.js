const search = (nums,target) =>{
    let start = 0, end = nums.length-1, firstOccurence = -1, lastOccurence = -1
    // find first occurence index using Binary search
    while(start <= end){
        // calculate mid 
        let mid = start + Math.floor((end-start)/2)
        if(nums[mid] === target){
            firstOccurence = mid
            end = mid -1
        }else if(nums[mid]<target){
            start = mid + 1
        }else{
            end = mid -1
        }
    }
    start = 0, end = nums.length-1
     while(start <= end){
        // calculate mid 
        let mid = start + Math.floor((end-start)/2)
        if(nums[mid] === target){
            lastOccurence = mid
            start = mid + 1
        }else if(nums[mid]<target){
            start = mid + 1
        }else{
            end = mid -1
        }
    }
    return [firstOccurence,lastOccurence]
}
console.log(search([5,7,7,8,8,10],8))  // [ 3, 4 ]
console.log(search([5,7,7,8,8,10],6))  // [ -1,-1]
console.log(search([],9))              // [ -1,-1]