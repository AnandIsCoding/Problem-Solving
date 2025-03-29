const minNum = (n) =>{
    let arr=[]
    while(n){
        let lastDigit = n%10
        if(lastDigit !== 0) arr.push(lastDigit)
        n = Math.floor(n/10)
    }
    let mid = 0 + Math.floor((arr.length-1-0)/2)
    let left = arr.slice(0,mid+1).sort((a,b)=>a-b,0)
    let right = arr.slice(mid+1).sort((a,b)=>a-b,0)
    let num1 = 0,num2 = 0
    for(let ch of left){
        num1 = num1*10 + ch
    }
    for(let ch of right){
        num2 = num2*10 + ch
    }
    return num1 + num2
}

console.log(minNum(2932)) // 22 + 23 = 52
console.log(minNum(4009)) // 4 + 9 = 13