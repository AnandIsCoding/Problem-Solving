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


// Declarative codeing : Code that specifies what the result of a task should be without specifying how to get it

//  [1, 2, 3, 4].reduce((x, y) => console.log(x, y));




// Functional Programming (FP) is a declarative programming paradigm that focuses on writing pure functions and avoiding side effects.

// A side effect occurs when a function modifies state outside its scope, such as:

// Modifying global variables

// Changing object properties

// Mutating arrays

// Performing I/O operations (like writing to a file or making an API call)

// Since FP aims for predictability and immutability, functions should not produce side effects.


//What is the purpose of the call stack in relation to the execution of functions? ->> keep track of currently execution func
// single threaded best example ->>  alert