// Using Linear Search  🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰   

const findLastOccurrence = (arr,target) =>{
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}
console.log(findLastOccurrence([1,1,2,2,3,3,4,4,5,5,6,6,7,7],4))     // 7




// Using Binary Search  🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰   


const findLastOccurrenceUsingBinarySearch = (arr, target) => {
    let start = 0, end = arr.length - 1;
    let lastIndex = -1; // To store the last occurrence

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === target) {
            lastIndex = mid;   // Store last found index
            start = mid + 1;   // Move right to find the last occurrence
        } else if (arr[mid] < target) {
            start = mid + 1;   // Move right
        } else {
            end = mid - 1;     // Move left
        }
    }

    return lastIndex; // Returns -1 if target is not found
}

// Test Cases
console.log(findLastOccurrenceUsingBinarySearch([1,1,2,2,3,3,4,4,5,5,6,6,7,7], 4)); // Output: 7
console.log(findLastOccurrenceUsingBinarySearch([1, 2, 3, 4, 4, 4, 5, 6], 4)); // Output: 5
console.log(findLastOccurrenceUsingBinarySearch([1, 2, 3, 4, 5, 6], 7)); // Output: -1
console.log(findLastOccurrenceUsingBinarySearch([4, 4, 4, 4, 4], 4)); // Output: 4
console.log(findLastOccurrenceUsingBinarySearch([1, 2, 3, 4, 5, 6], 2)); // Output: 1
