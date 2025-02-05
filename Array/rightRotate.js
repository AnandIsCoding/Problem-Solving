// Function to reverse a part of the array from index `start` to `end`
const reversePart = (arr, start, end) =>{
    while(start<=end){
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        end--
        start++
    }
    return arr
}

// Given array and rotation value k
let array = [1,2,3,4,5,6,7,8,9], k = 3
// Step 1: Reverse the first part (excluding the last `k` elements)
reversePart(array,  0,array.length-1-k)
// Step 2: Reverse the last `k` elements
reversePart(array, array.length-k,array.length-1)
// Step 3: Reverse the entire array
console.log(reversePart(array,0,array.length-1))


// Uncomment this line to see the value of `array.length-1-k`
// console.log(array.length-1-k)

//   [1,2,3,4,5,6] + [7,8,9]
//   Reverse [1,2,3,4,5,6] → [6,5,4,3,2,1]
//   Result: [6,5,4,3,2,1,7,8,9]

//   Reverse [7,8,9] → [9,8,7]
//   Result: [6,5,4,3,2,1,9,8,7]

//   Reverse [6,5,4,3,2,1,9,8,7] → [7,8,9,1,2,3,4,5,6]  rotated array 🚀