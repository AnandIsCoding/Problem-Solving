let obj1 = {
    name:'Anand'
}
let obj2 = {
    name:'Aditya'
}

function printNameAge(age){
    console.log(`Hello ${this.name} you are ${age} years old`)
}


Function.prototype.myCall = function(context, ...args){
    if(typeof this !== 'function'){
        return new Error(this + '  is not a callable function')
    }
    context.ref = this
    context.ref( ...args)
}

printNameAge.myCall(obj1, 21)
printNameAge.myCall(obj2, 23)