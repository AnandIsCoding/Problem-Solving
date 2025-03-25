const callPoints = (ops) =>{
    let arr = []
    for(let i=0;i<ops.length;i++){
        if(ops[i] === 'C'){
            arr.pop()
        }else if(ops[i] === '+'){
            let val = (arr[arr.length-1] || 0)+(arr[arr.length-2] || 0)
            arr.push(val)
        }else if(ops[i] === 'D'){
            arr.push((arr[arr.length-1] || 0)*2)
        }else{
            arr.push(Number(ops[i]))
        }
    }
    return arr.reduce((curr,acc)=>curr+acc,0)
}
console.log(callPoints(["5","2","C","D","+"]))
console.log(callPoints(["1","C"]))