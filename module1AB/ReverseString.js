const reverseString = (str) =>{
    //input validation
    if(typeof str !== 'string' || str.trim() === ''){
        return 'input must be a non empty string'
    }
    let reversed = '' // empty reversed string variable
    for(let i=str.length-1;i>=0;i--){ // loop from end of string to start
        reversed += str[i] // Append each character in reverse order
    }
    return reversed //str.split('').reverse().join('');
}
console.log(reverseString("JavaScript"))             //tpircSavaJ
console.log(reverseString("AlmaBetter University"))  //ytisrevinU retteBamlA
console.log(reverseString(''))                       //input must be a non empty string
console.log(reverseString(89))                       //input must be a non empty string