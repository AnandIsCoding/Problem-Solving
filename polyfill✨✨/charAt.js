// ✨✨✨✨✨✨✨✨✨✨ ✨String function ✨✨✨✨✨✨✨✨✨✨✨

String.prototype.myCharAt = function(index){
    if(typeof index !== 'number'){
        throw new Error('Index should be a number')
    }
    let str = this
    for(let i=0;i<str.length;i++){
        if(index === i) return str[i]
    }
    return undefined
}

let str = 'Anand'
let index = str.myCharAt(1)
console.log(index)