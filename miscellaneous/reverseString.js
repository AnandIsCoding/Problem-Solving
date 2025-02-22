
// Using Split reverse and join method  🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰🫰


// Do not remove nor make any changes in  main() function
function main() {
    var s = readLine();
    console.log(reverseString(s));
}
function reverseString(s) {
   // Your code goes here
   return s.split('').reverse().join('')
}
                                                            
                                                            // using simple for loop

                                                            let reversedstr = ''
                                                            for(let i=s.length-1;i>=0;i--){
                                                                reversedstr += s[i]
                                                            }
                                                            return reversedstr


                                                            // using for of loop, but using for of loop we cannot directly start from backinsted spit string in array of character and reverse if than concatinate in reversedstr
                                                            let reversedStr = ''
                                                            for(let character of s.split('').reverse()){
                                                                reversedstr += character
                                                            }
                                                            return reversedStr