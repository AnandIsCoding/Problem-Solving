// Find First Repeating Element in an Array 🌿🌿🌿🌿🌿🌿🌿🌿🫰🫰🫰🫰🫰🫰🫰🫰🫰🌐🌐🌐🌐🌐🌐🌐🌐💞💞💞💞💞💞💞💞😊😊😊😊😊😊😊😊

// Task Description:
// Create a function that takes an array as input and returns the first element that appears more than once. The function should iterate through the array and, upon detecting the first duplicate, immediately return that element. If no duplicates are found, the function should return undefined.

// Example:
// For the input array [1, 2, 3, 4, 1, 3, 2, 5, 7, 8], the function should return 1 because 1 is the first element that repeats.

// Additional Challenge (Optional):
// Optimize the solution from the brute-force approach (O(n²)) to an O(n) time complexity solution by using a Set to keep track of seen elements.

const findFirstRepeating = (arr) =>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                return arr[i]
            }
        }
    }
    return -1
}
console.log(findFirstRepeating([1,2,3,4,1,3,2,5,7,8]))       // 1


// using Set 🌿🌿🌿🌿🌿🌿🌿🌿🫰🫰🫰🫰🫰🫰🫰🫰🫰🌐🌐🌐🌐🌐🌐🌐🌐💞💞💞💞💞💞💞💞😊😊😊😊😊😊😊😊

const findFirstRepeatingUsingSet = (arr) =>{
    let seen = new Set()
    for(let i=0;i<arr.length;i++){
        if(seen.has(arr[i])){
            return arr[i]
        }
        seen.add(arr[i])
    }
    return -1
}
console.log(findFirstRepeatingUsingSet([1,2,3,4,1,3,2,5,7,8]))     // 1