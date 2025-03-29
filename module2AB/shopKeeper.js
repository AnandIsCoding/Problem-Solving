const callPoints = (operations) =>{
    let arr = []
    for(let i=0;i<operations.length;i++){
        if(operations[i] === 'C'){
            arr.pop()
        }else if(operations[i] === '+'){
            let val = (arr[arr.length-1] || 0)+(arr[arr.length-2] || 0)
            arr.push(val)
        }else if(operations[i] === 'D'){
            arr.push((arr[arr.length-1] || 0)*2)
        }else{
            arr.push(Number(operations[i]))
        }
    }
    return arr.reduce((curr,acc)=>curr+acc,0)
}
console.log(callPoints(["5","2","C","D","+"]))
console.log(callPoints(["1","C"]))