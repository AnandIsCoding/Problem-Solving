// 🦢🕊️🦢🕊️🦢🕊️Currying is a technique in JavaScript where instead of writing a function that takes multiple arguments at once, 
// we break it down into multiple smaller functions, each taking one argument at a time.🦢🕊️🦢🕊️🦢🕊️🦢

function add(a){
    return function(b){
        return a+b
    }
}
console.log(add(4)(5))   // 9
console.log(add(4))  //  [Function (anonymous)]



function greet(start){
    return function(name){
        return `${start} ${name}`
    }
}
console.log(greet('hello')(`Anand`))



const add = (a) =>{
    return function(b){
        if(b !== undefined){
            return add(a+b)
        }
        return a
    }
}
console.log(add(2)(3)(4)())