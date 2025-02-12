const checkPallindrome = (str) =>{
    let start = 0, end = str.length-1
    while(start <= end){
        if(str[start] !== str[end]){
            return false
        }
        start++
        end--
    }
    return true
} 
console.log(checkPallindrome('raar'))
console.log(checkPallindrome('1234321'))


// using reverse the string and check is revrsed and actual str is same, becoz pallindromes are same from both end reverse = actual

const checkPallindromeUsingReverse = (str) =>{
    let rev = str.split('').reverse().join('')
    return rev === str
} 
console.log(checkPallindromeUsingReverse('raar'))       //true
console.log(checkPallindromeUsingReverse('1234321'))    //true
console.log(checkPallindromeUsingReverse('12343218'))   //false