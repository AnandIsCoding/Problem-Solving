let obj1 = {
    name:'Anand'
}
let obj2={
    name:'Aditya'
}
function printNameAge(age, city){
    console.log(`Hello ${this.name} you are ${age} years old from ${city}`)
}

Function.prototype.myBind = function(context, args ){
    if(typeof this !== 'function'){
        return new Error(this + '  is not a callable function')
    }
    context.ref = this
    return context.ref
}

let one = printNameAge.myBind(obj1, 21, 'Katihar')
let two = printNameAge.myBind(obj2, 23, 'Purnea')

console.log(one())
console.log(two())