function findDuplicates(arr) {
    // Your code goes here
    arr.sort((a, b) => a - b);  // Sort the array
     let result = [];
     for (let i = 1; i < arr.length; i++) {
         if (arr[i] === arr[i - 1] && !result.includes(arr[i])) {
             result.push(arr[i]);
         }
     }
 
     return result.length > 0 ? result : [-1];
 }

 console.log(findDuplicates([2, 3, 1, 2, 3])) // [2, 3]