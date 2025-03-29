const str = 'The Rain in spain stays mainly in the plain'

// Using regular expression to find all occurrences of the word 'in' 
const regex = /in/g
let match;
while((match = regex.exec(str)) !== null) {
    //console.log(match)
}



// ----------------------------------------------------------------
console.log(regex.test(str))
console.log(/\d/.test(str))

// ----------------------------------------------------------------

function isValidPhoneNumber(phoneNumber) {
    // Your code goes here
    let regex = /^[987]\d{9}$/
    return regex.test(phoneNumber)
  }