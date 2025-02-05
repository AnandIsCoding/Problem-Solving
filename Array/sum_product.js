//using built in array method in Javascript
const sumProductOfArray = (arr) =>{
    let sum,product;
    product = arr.reduce((acc,curr)=>acc*curr,1)
    sum = arr.reduce((acc,curr)=>acc+curr,0)
    return {sum,product}
}
console.log(sumProductOfArray([1,2,3])) //🚀


//2nd Approach using loops
const sumProductOfArray2 = (arr) =>{
    let sum = 0,product = 1;
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    for(let i=0;i<arr.length;i++){
        product *= arr[i]
    }
    return {sum,product}
}
console.log(sumProductOfArray2([1,2,3])) //🚀