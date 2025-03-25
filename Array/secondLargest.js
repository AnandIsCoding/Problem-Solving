
function findSecondLargestDistinct(arr) {
    // Your code goes here
    arr = [...new Set(arr)]
     arr = arr.sort((a,b)=>b-a)
    if(arr.length < 2){
      return -1
    }
}



//2nd larget elemnt using loop and comparison
const secondLargest2 = (arr) =>{
     if(arr.length<2) return 'To find 2nd larest element array should contain minumum 2 element'
    let max = -Infinity, smax;
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            smax = max
            max = arr[i]
        }else if(arr[i] < max && arr[i] !== smax){
            smax = arr[i]
        }
    }
    return {max,smax}
}
console.log(secondLargest2([2,3,4,1,9,6,8]))

