String.prototype.myToLowerCase = function(){
    let lower = ''
    let str = this
    for(let i=0;i<str.length;i++){
        let val = String.fromCharCode(str.charCodeAt(i) + 32)
        lower += val
    }
    return lower
}

String.prototype.myToUpperCase = function(){
    let upper = ''
    let str = this
    for(let i=0;i<str.length;i++){
        let val = String.fromCharCode( str.charCodeAt(i) - 32 )
        upper += val
    }
    return upper
}


console.log('ABC'.myToLowerCase())
console.log('abc'.myToUpperCase())