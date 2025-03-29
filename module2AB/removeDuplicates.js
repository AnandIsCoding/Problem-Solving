const removeDuplicates = (str) =>{
    return [...new Set(str.split(''))].join('')
}
console.log(removeDuplicates('zvvo'))  // zvo
console.log(removeDuplicates('gfg'))   // gf