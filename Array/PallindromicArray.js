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
console.log(checkPallindromeArray([1,2,3,4,3,2,1]))
console.log(checkPallindromeArray([1,2,3,4,3,2,1,9]))