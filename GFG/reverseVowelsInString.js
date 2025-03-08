function reverseVowels(str){
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    let arr = str.split('')
    let start=0,end=arr.length-1
    while(start <= end){
        if(vowels.includes(arr[start]) && vowels.includes(arr[end])){
            [arr[start],arr[end]] = [arr[end],arr[start]]
        }
        start++
        end--
    }
    return arr.join('')
}
console.log(reverseVowels('leetcode'))  //leotcede

console.log(reverseVowels('A man, a plan, a canal: Panama'))  // a man, a plan, a canal: PanamA