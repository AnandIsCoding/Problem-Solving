// using while loop ✅ 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
const checkPallindromeArray = (arr) =>{
    let start = 0, end = arr.length-1
    while(start <= end){
        if(arr[start] !== arr[end]){
            return false
        }
        start++
        end--
    }
    return true
}
console.log(checkPallindromeArray([1,2,3,4,3,2,1]))        //   true
console.log(checkPallindromeArray([1,2,3,4,3,2,1,9]))      //   false



// using for loop ✅ 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
const checkPallindromeArray2 = (arr) =>{
    for(let i=0;i<Math.floor(arr.length/2);i++){
        if(arr[i] !== arr[arr.length-i-1]){
            return false
        }
    }
    return true
}   
console.log(checkPallindromeArray2([1,2,3,4,3,2,1]))      //  true
console.log(checkPallindromeArray2([1,2,3,4,3,2,1,9]))    // false