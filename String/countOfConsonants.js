let countConsonants = (str) =>{
    let vowels = ['a','e' , 'i', 'o', 'u']
    let consonants = '', countOfConsonants = 0;
    for(let i=0;i<str.length;i++){
        if(!vowels.includes(str[i])){
            consonants += str[i]
            countOfConsonants++
        }
    }
    return{consonants, countOfConsonants} 
}
console.log(countConsonants('abcdefgh'))   // { consonants: 'bcdfgh', countOfConsonants: 6 }