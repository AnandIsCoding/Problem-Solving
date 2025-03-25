((num) => {
    console.log(num);
})(6); // ✅ Outputs: 6

(function print(num) {
    console.log(num);
})(5); // ✅ Outputs: 5


 //  **Never assign an IIFI to const**



 let value = 'Global';    // if I'll not give semiColon here than Error will be: Global is not a function

(function(){
    let value = 'Local'
    console.log(value);
})();

console.log(value)  // Local Global



// Sum of numbers using IIFI and Reduce

let sun = ((arr)=>{
    console.log(arr.reduce((acc,curr)=>acc+curr,0))
    
})([1,2,3])


// IIFI that uses closure and toggles boolean value

const BooleanTogglerWithClosure = (function(){
    let value = true
    return function(){
        value = !value
        return value
    }
 })()
 
 console.log(BooleanTogglerWithClosure())
 console.log(BooleanTogglerWithClosure())
 console.log(BooleanTogglerWithClosure())
 console.log(BooleanTogglerWithClosure())
 console.log(BooleanTogglerWithClosure())