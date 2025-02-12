const swapConsecutive = (str) =>{
    let copy = str.split('')
    for(let i=0;i<copy.length-1;i+=2){
       let temp = copy[i]
       copy[i] = copy[i+1]
       copy[i+1] = temp
    }
   return copy.join('')
}
console.log(swapConsecutive("abcdef"))   //badcfe
