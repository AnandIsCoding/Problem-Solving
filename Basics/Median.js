// **Description**: Write a program to find the median of an array of numbers.  
//     **Example**:  
//     Input: `array = [3, 1, 2, 4, 5]`  
//     Output: `3`  
//     Explanation: The median of the sorted array [1, 2, 3, 4, 5] is 3. A median is the middle number in a sorted list of either ascending or descending numbers. if array contains even number of elements than median is the average of  sortedArray[mid-1] + sortedArray[mid])/2


function findMedian(arr){
    if(arr.length<0) return 'nope'
    let sortedArray = arr.sort((a,b)=>{
        return a-b
    })
    let mid = Math.floor(sortedArray.length/2)
    if(sortedArray.length % 2 !==0){
        return sortedArray[mid]
    }else{
        //if array is even than median is the average of 2 
        return Math.floor( (sortedArray[mid-1] + sortedArray[mid])/2 )
    }
    
}
const result = findMedian([3, 1, 2, 4, 5,6])
console.log(result)