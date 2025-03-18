// using Linear Search 💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕

const nextGreatestLetter = (arr,target) =>{
    for(let i=0;i<arr.length;i++){
        if(arr[i] > target) return arr[i]
    }
    return arr[0]
 }
 console.log('Using Linear Search algorithm ---------------------')
 console.log(nextGreatestLetter(["c","f","j"],"a"))
 console.log(nextGreatestLetter(["c","f","j"],"c"))
 console.log(nextGreatestLetter(["x","x","y","y"],"z"))



 // using Binary Search algorithm 💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕
 

const nextGreatestLetterBinarySearch = (arr,target) =>{
    let ans = arr[0]
    let start=0,end=arr.length-1
    while(start <= end){
        let mid = start + Math.floor((end - start)/2)
        if(arr[mid] > target){
            ans = arr[mid]
            end = mid-1
        }else {
            start = mid+1
        }
    }
    return ans
 }
 console.log('Using Binary Search algorithm ---------------------')
 console.log(nextGreatestLetterBinarySearch(["c","f","j"],"a"))
 console.log(nextGreatestLetterBinarySearch(["c","f","j"],"c"))
 console.log(nextGreatestLetterBinarySearch(["x","x","y","y"],"z"))

//                Using Linear Search algorithm ---------------------
//               c
//               f
//               x
//               Using Binary Search algorithm ---------------------
//               c
//               x
//               x