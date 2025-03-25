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

const mobileNumber = 7667642000
const mobileRegex = /^\d{10}$/
console.log('Is Mobile no Correct ', mobileRegex.test(mobileNumber))