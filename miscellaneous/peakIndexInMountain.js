// using linear search O(n)

const peakIndexInMountain = (arr) =>{
    for(let i=1;i<arr.length-1;i++){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            return i
        }
    }
    return -1
}
console.log('peak index is ',peakIndexInMountain([1,3,5,4,2,0]))   // peak index is  2
  
