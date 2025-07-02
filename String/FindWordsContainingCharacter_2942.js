var findWordsContaining = function(words, x) {
    // let result = []
    // for(let i=0;i<words.length;i++){
    //     if(words[i].includes(x)){
    //         result.push(i)
    //     }
    // }
    // return result

    // without includes built in methid
    let result = []
    for(let i=0;i<words.length;i++){
        let index = 0,n = words[i].length-1, current = words[i]
        while(index <= n){
            if(current[index] === x){
                result.push(i)
                break;
            }
            index++
        }
    }
    return result
    
};
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"a"))  // [ 0, 2 ]
