// function findLongestWord(sentence) {
// 	// validate
// 	if(typeof sentence !== 'string') return 'Input must be a string'
//     const words = sentence.split(' ');
//     let maxLength = 0;

//     for (let i = 0; i < words.length; i++) {
//         const length = words[i].length;
//         if (length > maxLength) {
//             maxLength = length;
//         }
//     }

//     return maxLength;
// }

// // Do not modify the below lines
// module.exports = { findLongestWord };

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) //6
// console.log(findLongestWord(" Coding is fun with fellow learners")) //8
// console.log(findLongestWord("")) //0
// console.log(findLongestWord(108)) //Input must be a string


//using for of loop ------Approach2
function findLongestWord(sentence) {
	// validate
	if(typeof sentence !== 'string') return 'Input must be a string'
    const words = sentence.split(' ');
    let maxLength = 0;

    for (let word of words) {
        const length = word.length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) //6
console.log(findLongestWord(" Coding is fun with fellow learners")) //8
console.log(findLongestWord("")) //0
console.log(findLongestWord(108)) //Input must be a string

// Do not modify the below lines
module.exports = { findLongestWord };



