var minNumber = function(nums1, nums2) {
    // Your code goes here
    let min = Infinity
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            let pair = `${nums1[i]}${nums2[j]}`
            if(Number(pair) < min){
                min = Number(pair)
            }
        }
    }
     for(let j=nums2.length-1;j>=0;j--){
        for(let i=nums1.length-1;i >= 0;i--){
            let pair = `${nums2[j]}${nums1[i]}`
            if(Number(pair) < min){
                min = Number(pair)
            }
        }
    }
    return min
    
};
console.log(minNumber([3,5,2,6], [3,1,7]))