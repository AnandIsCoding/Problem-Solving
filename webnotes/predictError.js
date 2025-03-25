var a = 9
var a = 19
console.log(a)     //  ✅  19    , No Error


let b=6
let b=6           //    ❌ SyntaxError: Identifier 'a' has already been declared



const c;  // ❌

{
    let a = 9
    var b = 8
    const c = 7
}
console.log(c)    // Error
console.log(a)    // Error
console.log(b)    // 8    , ✅ No Error


// shadowing : if variable declared with var is redeclared inside a block than it will be redeclared otherwise not