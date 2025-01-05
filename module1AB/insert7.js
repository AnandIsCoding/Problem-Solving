module.exports = { insert7 };

function insert7(inputString) {
    // Write your code inside this function only.
    if (typeof inputString !== 'string' || inputString.trim() === '') {
        return 'inputString must be a non-empty string';
    }
    let result =''
    let count = 0
    //iterating over the input string and concatenating value in result string and if count is 7 concatinate 7 and again set count to 0
    for(let i=0;i<inputString.length;i++){
         count++
        result += inputString[i]
        if(count === 7){
            result += '7'
            count =0
        }
    }
    return result
}
console.log(insert7("Hello World and Universe!"))   //Hello W7orld an7d Unive7rse!
console.log(insert7("Full Stack Web Development"))   //Full St7ack Web7 Develo7pment
console.log(insert7(""))                            //inputString must be a non-empty string
console.log(insert7("123456789"))                   //1234567789
console.log(insert7(12))                            //inputString must be a non-empty string