const checkSign = (num1,num2,num3) =>{
    let arr = [num1,num2,num3]
    let sign = ''
    if(arr.includes(0)) return 'No Zero accepted'
    arr.forEach((val,_)=>{
       if(val > 0){
           sign += '+'
       }else{
           sign += '-'
       }
    })
    return sign
}
console.log(checkSign(8, -3, 4))      //+-+
console.log(checkSign(8, 3, 4))       //+++
console.log(checkSign(-8, -3, 4))     //--+
console.log(checkSign(-8, -3, -4))    //---
console.log(checkSign(-8, 0, -4))     //No Zero accepted