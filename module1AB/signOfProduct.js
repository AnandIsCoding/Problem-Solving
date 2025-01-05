const signOfProduct = (arr) =>{
    // array validation 
    if(!Array.isArray(arr) || arr.length === 0){
        return 'input must be an array of integers '
    }
    let negativeCount = 0
    for(let i=0;i<arr.length;i++){
        // array element validation
        if(typeof arr[i] !== 'number') return 'in array every element must be a number'
        // logic --> if array contains even a single 0 product will be 0
        // logic --> if array contains odd number of negative numbers product will be -1  - + = -
        // logic --> if array contains even number of negative numbers product will be 1  - - = +
        if(arr[i] === 0){
            return 0
        }else if(arr[i]<0){
            negativeCount++
        }
    }
    if(negativeCount % 2 !== 0) return -1
    return 1
}
console.log(signOfProduct([2, -3, 5, 4]))    //-1
console.log(signOfProduct( [1, 2, 0]))       //0
console.log(signOfProduct([2, -3, -5, 4]))   //1
console.log(signOfProduct([2, 3, 5, 4]))     //1
console.log(signOfProduct(''))               //input must be an array of integers
console.log(signOfProduct([]))               //input must be an array of integers
console.log(signOfProduct([1, 'a', 3])); 