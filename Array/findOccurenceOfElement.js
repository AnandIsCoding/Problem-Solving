const countOccurence = (arr) =>{
    let allElem = {}
    for(let i=0;i<arr.length;i++){
        if(allElem[arr[i]] === undefined){
            allElem[arr[i]] = 1
        }else{
             allElem[arr[i]]++
        }
    }
    // console.log(Math.min(...Object.values(allElem)))
    return allElem
}
console.log(countOccurence([1,5,3,4,3,5,6]))


