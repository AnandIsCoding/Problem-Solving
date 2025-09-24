/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function (arr) {
    arr = [...new Set(arr)].filter(x => x > 0).sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++){
        if( arr[i] !== i+1 ) return i+1
    }
    return arr.length+1
};
