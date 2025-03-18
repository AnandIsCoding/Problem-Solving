const minimumNumberOfStringPairs = (arr) =>{
    let set = new Set(arr), count = 0
    for(let ch of arr){
        let reversed = ch.split('').reverse().join('')
        if(ch === reversed) continue;
        if(set.has(reversed)){
            count++
            set.delete(ch)
        }
    }
    return count
}
console.log(minimumNumberOfStringPairs(['cd','ac','dc','ca','zz']))  // 2


//   for(let i=0;i<arr.length;i++){
//             for(let j=i+1;j<arr.length;j++){
//                 if((arr[i].split('').reverse().join('')) === arr[j]) count++
//             }
//     }
//     return count