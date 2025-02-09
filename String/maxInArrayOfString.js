const maxElemInStringArray = (arr) =>{
    let max = -Infinity, maxString=''
    arr.forEach((elem)=>{
       if(Number(elem) > max ){
           max = Number(elem)
           maxString = elem
       }
    })
    return {max, maxString}
}
console.log(maxElemInStringArray(['0234','890','001120','34']))

