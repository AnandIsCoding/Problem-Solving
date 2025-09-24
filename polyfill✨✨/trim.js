String.prototype.kut = function(){
    let str = this
    let start, end, result = ''
    for(let i=0;i<str.length;i++){
        if(str[i] !== ' '){
            start = i
            break
        }
    }
    for(let i=str.length-1;i>=0;i--){
        if(str[i] !== ' '){
            end = i
            break
        }
    }
    return str.slice(start,end+1)
}

console.log('h ij     '.kut())