const str = 'hello helhilo ji hii hii ji'
let regex = /hello/g

console.log(str.match(regex)) // [ 'hello', 'hello' ]
console.log(str.match(regex).length)  // 2

console.log(str.match(/\Bhi+\B/g))  //  [ 'hi' ]