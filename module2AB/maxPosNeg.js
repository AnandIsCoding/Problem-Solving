const maxCountPositiveNegative = (arr) =>{
    let pos=0,neg=0
    for(let ch of arr){
        if(ch < 0) neg++
        else if(ch > 0) pos++
    }
    return Math.max(pos,neg)
}
console.log(maxCountPositiveNegative([-2,-1,-1,1,2,3]))
console.log(maxCountPositiveNegative([-3,-2,-1,0,0,1,2]))
console.log(maxCountPositiveNegative([5,20,66,1314]))

