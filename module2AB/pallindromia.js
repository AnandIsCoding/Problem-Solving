const isPallindrome = (n) =>{
   // Convert number to string, split into array, reverse it, and check if it matches the original
   let rev = n.toString().split('').reverse().join('');
   return n.toString() === rev;
}
console.log(isPallindrome(12345))   // false
console.log(isPallindrome(12321))   // true
console.log(isPallindrome(1451))    // false