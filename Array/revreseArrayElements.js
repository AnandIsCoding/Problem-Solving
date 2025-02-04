// arrays are mutable by default. This means that the array can be altered after the array is created. We can modify it "in place", adding, removing, or changing elements.
// ✅ Arrays in JavaScript are mutable, meaning methods like reverse() modify the original array instead of creating a new one.


const copyArrayReverse = (arr) => {
    return arr.reverse();  // Reverse the array in place
} 
let array = [3,4,5,6,7,8,9];  // Original array
let rev = copyArrayReverse(array); // Passing the original array

console.log('reversed array ->> ', rev);
console.log('actual array ->> ', array);




// to not modify actual array use [...array].reverse()


// simple example shows array in js are mutable🚀
let arr = [3,4,5]
arr[0] = 10
console.log(arr)     //[ 10, 4, 5 ]

