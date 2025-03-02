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