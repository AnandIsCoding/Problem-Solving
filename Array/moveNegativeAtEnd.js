const moveNegativeAtEnd = (arr) =>{
    let start = 0, end = arr.length-1
    while(start<end){
        if(arr[start] > 0) start++
        else if(arr[end] < 0) end--
        else if(arr[start] < 0 && arr[end] > 0){
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++
            end--
        }
    }
    return arr
}
console.log(moveNegativeAtEnd([-1,-4,-5,5,-6,9,-2]))

//    [ 9,  5, -5, -4, -6, -1, -2 ] 🚀

// check 0th endex (start) if it's not negative than index++
// check last index if it's not negative than index--
// check if start index is negative AND end index is positive than swap 
  