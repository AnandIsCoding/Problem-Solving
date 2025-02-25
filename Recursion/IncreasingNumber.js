// 1 to n with 1 parameter
const increasing = (n) =>{
    if(n==0) return 
    increasing(n-1)
    console.log(n)
  }
  console.log(increasing(5))
  
  

// 1 to n with 2 parameter

const increasingWIth2Parameter = (n,i) =>{
    // base call
    if(i === n) return i
    // processing or work
    console.log(i)
    //Recursive call
    return increasing(n,i+1)
    
}
console.log(increasingWIth2Parameter(5,1))






// n to 1
const descreasing = (n) =>{
    if(n === 1) return 1
    console.log(n)
    return descreasing(n-1)
}
console.log(descreasing(5))


// greet n times
const Greet = (n) =>{
    if(n===0) return
    console.log('good Morning ',n)
    return Greet(n-1)
}
console.log(Greet(5))