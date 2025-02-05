//  an array containing only 0s and 1s😊
// count how many 0 are there than fill 0 from 0index to count of zero-1, and rest of all with 1
let sortZerosOnes = (arr) =>{
    let  countZeros = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 0){
            countZeros ++
        }
    }
    // modify array with 0 from index 0 to countZeros-1, 1 from countZeros to last index
    for(let i=0;i<arr.length;i++){
       if(i<countZeros){
         arr[i] = 0
       }else{
        arr[i] = 1
       }
    }
    
    return arr
}
console.log(sortZerosOnes([0,1,1,1,0,0,1,0,1,0]))     //[ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1 ] 🚀




// I used the Two-Pointer Approach to efficiently sort an array of 0s and 1s in O(n) time complexity. By initializing start at index 0 and end at the last index, I moved start forward if it was already 0 and end backward if it was already 1, reducing unnecessary operations. When arr[start] > arr[end] (i.e., 1 before 0), I swapped them to maintain correct order. This ensured a single-pass solution, avoiding nested loops and making the approach optimal. My method is efficient, clean, and correctly sorts the array with minimal swaps. 🚀
let sortZerosOnes2 = (arr) =>{
    let start = 0, end = arr.length-1
    while(start < end){
        if(arr[start] === 0) start++
        else if(arr[end] === 1) end--
        else if(arr[start] > arr[end]){
            [arr[start], arr[end]] = [arr[end], arr[start]];
        }
    }
    return arr
}
console.log(sortZerosOnes2([1,1,0,1,0,1,1,0]))    //[ 0, 0, 0, 1, 1, 1, 1, 1 ]
  