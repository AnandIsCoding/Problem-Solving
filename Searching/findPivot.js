const pivot = (n) =>{
    let arr = n.toString().split('')
    for(let i=0;i<arr.length;i++){
        let leftSum=0,rightSum=0
        for(let j=0;j<i;j++){
            leftSum += Number(arr[j])
        }
        for(let k=i+1;k<arr.length;k++){
            rightSum += Number(arr[k])
        }
        if(leftSum === rightSum){
            return i
        }
    }
}
console.log(pivot(173656))