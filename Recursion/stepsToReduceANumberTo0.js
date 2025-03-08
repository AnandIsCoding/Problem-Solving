// Leetcode 1342

const countSteps = (n) =>{
    //base case
    if(n === 1){
        return n
    }
    // recursion 
    if(n % 2 === 0){
       return 1 + countSteps(Math.floor(n/2))
    }
    return 1 + countSteps(n-1)
}
console.log(countSteps(14))      //  ------------------->>  6