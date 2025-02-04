const reversePartOfArray = (arr, start, end) =>{
    let i=start,j=end
    while(i<=j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    return arr
 }
 console.log(reversePartOfArray([4,5,6,7,8,9,5,3,8,56],1,4))
                                 //1     4
                                 //5,6,7,8  will be reversed other element will be in same order
                                 //[ 4, 8, 7, 6, 5, 9, 5, 3, 8, 56 ] will be output