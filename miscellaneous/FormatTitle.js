// Do not remove nor make any changes in  main() function
function main() {
    var title = readLine();
    console.log(capitalizeTitle(title));
}
var capitalizeTitle = function(title) {
    // Your code goes here
    let arr = title.split(' ')
    let formated =''
     arr.forEach((item,_)=>{
      if(item.length > 2){
             formated += `${item[0].toUpperCase()}${item.slice(1).toLowerCase()} `
      }else{
         formated += `${item.toLowerCase()} `
      }
      
    })
    return formated
};




// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.
// Note

// To try your written code, try input in below format.
// First leTTeR of EACH Word
// Where above mentioned is an input string


// Input:
// title = "First leTTeR of EACH Word"
// Output:
// "First Letter of Each Word"

// Explanation:
// The word "of" has length 2, so it is all lowercase. The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

// Input:
// title = "i lOve code"

// Output:
// "i Love Code"

// Explanation:
// The word "i" has length 1, so it is lowercase. The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.