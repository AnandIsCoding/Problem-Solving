// Using Regex Literal 💕💕💕💕

let pattern = /hi/g
console.log(typeof pattern)  // object
console.log(pattern) //   /hi/

// -------------------------------------------------------------------------------------------------------------------------------------
// Using Regex Constructor 💕💕💕💕

let pattern2 = new RegExp()
console.log(pattern2)     //      /(?:)/

console.log(typeof pattern2)  // object
//-------------------------------------------------------------------------------------------------------------------------------------

let pattern3 = new RegExp('hi','g')
console.log(pattern3)    //    /hi/g



