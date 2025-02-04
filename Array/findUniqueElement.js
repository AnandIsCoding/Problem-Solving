const findUnique = (arr) =>{
    let result = 0
    arr.forEach((val)=>{
        result ^= val
    })
    return result
 }
 console.log(findUnique([2,3,2,3,4,5,4,5,6]))
 
 //  0 ^ 2 ^ 3 ^ 2 ^ 3 ^ 4 ^ 5 ^4 ^5 ^ 6
 //same same vala kat jayega
 
 // xor with 0 doesn't affect value, value remains same
 console.log(0^0)  //0
 console.log(1^0)  //1