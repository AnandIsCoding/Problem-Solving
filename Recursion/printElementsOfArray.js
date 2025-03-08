const printElements = (arr,index=0) => {
    if(index >= arr.length){
        return
    }
    console.log(arr[index])
    return printElements(arr,index = index + 1)
}
console.log(printElements([1,2,3,4,5]))


// 1
// 2
// 3
// 4
// 5

// print elements in reverse 🫰🫰🫰🫰🫰🫰🫰🫰🫰

const printReverse = (arr,index=arr.length-1) =>{
    if(index === 0){
        return arr[index]
    }
    console.log(arr[index])
    return printReverse(arr,index-1)
}
console.log(printReverse([1,2,3,4,5]))