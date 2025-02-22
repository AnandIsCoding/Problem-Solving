const TernarySearch = (arr,target) =>{
    let start = 0,end = arr.length-1
    while(start <= end){
        let mid1 = Math.floor(start + (end-start)/3)
        let mid2 = Math.floor(end - (end-start)/3)
        if(arr[mid1] === target) return mid1
        if(arr[mid2] === target) return mid2
        else if(target < arr[mid1]){
            end = mid1 - 1
        }else if(target > arr[mid1] ){
            start = mid1+1
        }
        else if(target > arr[mid2] ){
            start = mid2 + 1
            end = arr.length-1
        }
    }
    return -1
}
console.log(TernarySearch([1, 2, 3, 4, 5, 6, 7],5))    // 4
console.log(TernarySearch([1, 2, 3, 4, 5, 6, 7],7))    // 6
console.log(TernarySearch([1, 2, 3, 4, 5, 6, 7],1))    // 0



// Working of Ternary Search
// Define the Search Space: Ternary search starts with a sorted array and defines the search space by setting the left and right pointers initially to the first and last indices of the array, respectively.
// Divide the Search Space: Divide the search space into three equal parts by setting two mid-point pointers: mid1 = left + (right - left) / 3 and mid2 = right - (right - left) / 3.
// Compare with the Target: Compare the target value with the elements at mid1 and mid2. There are three possible outcomes:
// If the target matches the element at mid1, the search is successful, and the index of mid1 is returned.
// If the target matches the element at mid2, the search is successful, and the index of mid2 is returned.
// If the target is smaller than the element at mid1, update the right pointer to mid1 - 1 and repeat the process.
// If the target is larger than the element at mid2, update the left pointer to mid2 + 1 and repeat the process.
// If the target is between the elements at mid1 and mid2, the search space is further divided, and the process is repeated recursively on the appropriate subarray.
// Repeat the Process: Steps 2 and 3 are repeated until either a match is found or the search space becomes empty.
// End of Search: If the search space becomes empty without finding a match, ternary search concludes that the target value is not present in the array and returns a special value (e.g., -1) to indicate the absence of the target.

// Time Complexity of Ternary Search
// Worst-case time complexity: O(log3(n))
// The worst-case time complexity of ternary search is logarithmic with base 3. This is because the search space is divided into three equal parts in each iteration, reducing the search space by a factor of 3 at every step. Therefore, the number of comparisons required to find the target element grows logarithmically with the size of the input array.
// Average-case time complexity: O(log3(n))
// The average-case time complexity of ternary search is also logarithmic with base 3. It performs a similar number of comparisons as the worst-case scenario on average.
// Best-case time complexity: O(1)
// The best-case time complexity of ternary search occurs when the target element is found at the first attempt, resulting in a constant time complexity.
// Space Complexity of Ternary Search
// Space complexity of Ternary Search: O(1)
// Ternary search is an in-place algorithm that uses a constant amount of extra space. It does not require additional data structures or recursion, resulting in a space complexity of O(1).
 