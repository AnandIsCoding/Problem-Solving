// **Description**: Write a program to find all Armstrong numbers within a given range.  
//     **Example**:  
//     Input: `range = [1, 500]`  
//     Output: `[1, 153, 370, 371, 407]`  
//     Explanation: Armstrong numbers between 1 and 500 are 1, 153, 370, 371, and 407. 


const ArmstrongInRange = (start,end) =>{
    let armstrongs =[]
    for(let i=start;i<=end;i++){
        let sum=0
        let copy = i
        while(copy){
            let lastDigit = copy % 10
            sum += (lastDigit * lastDigit * lastDigit)
            copy = Math.floor(copy/10)
        }
        if( i === sum ) armstrongs.push(i)
    }
    return armstrongs;
}
const result = ArmstrongInRange(1,500)
console.log(result)