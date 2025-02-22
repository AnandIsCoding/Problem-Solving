const BinarySearch = (arr,target) =>{
    let start = 0, end = arr.length-1
    while(start <= end){
        let mid = start + Math.floor((end - start)/2)
        if(arr[mid] === target) return mid
        else if(target > arr[mid]) start = mid + 1
        else if(target < arr[mid]) end = mid - 1
    }
    return -1
}
console.log(BinarySearch([1,2,3,4,5,6,7,8,9,12,13,34,45,67,78],67))   // 13
console.log(BinarySearch([1,2,3,4,5,6,7,8,9,12,13,34,45,67,78],100))  // -1


// Time Complexity = O(log n)
// Space Complexity = O(1)