// Do not remove nor make any changes in  main() function
function main() {
    var s = readLine();
    console.log(reverseWords(s));
}
var reverseWords = function (s) {
   // Your code goes here
   return s.split(' ').reverse().join(' ')
}


// the sky is blue ===>  blue is sky the