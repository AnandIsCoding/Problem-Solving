// Using in built arr.sort method , will sort according to ASCII values    A-Z = 65 - 70   , a-z = 97-122

const sortInAscending = (str) =>{
    let arr = str.split('')
    return arr.sort().join('')
}


console.log(sortInAscending('bacdfe'))  // abcdef

console.log(sortInAscending('bacdfeAB')) //  ABabcdef

