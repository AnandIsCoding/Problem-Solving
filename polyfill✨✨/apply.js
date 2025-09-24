let obj1 = {
    name:'Anand'
}
let obj2={
    name:'Aditya'
}
function printNameAge(age, city){
    console.log(`Hello ${this.name} you are ${age} years old from ${city}`)
}

Function.prototype.myApply = function(context, args ){
    if(typeof this !== 'function'){
        return new Error(this + '  is not a callable function')
    }
    if(!Array.isArray(args)){
        return new Error(args + '  is not an array')
    }
    context.ref = this
    context.ref(...args)
}

printNameAge.myApply(obj1, [21, 'Katihar'])
printNameAge.myApply(obj2, [23, 'Purnea'])

//   Hello Anand you are 21 years old from Katihar
//   Hello Aditya you are 23 years old from Purnea
