const merge2SortedArrays = (arr1,arr2) =>{
    let arr3 = []
    let i=0,j=0,m=arr1.length, n = arr2.length
    while(i<m && j<n){
        if(arr1[i]<=arr2[j]){
            arr3.push(arr1[i])
            i++
        }else{
            arr3.push(arr2[j])
            j++
        }
    }
    while(i<m){
        arr3.push(arr1[i])
        i++
    }
    while(j<n){
        arr3.push(arr2[j])
        j++
    }
    return arr3
}
console.log(merge2SortedArrays([1,3,5,7,9,13,14],[1,2,3,8,10]))   // [ 1, 1, 2, 3, 3, 5, 7, 8, 9, 10, 13, 14]