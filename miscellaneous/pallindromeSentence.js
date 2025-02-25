// Palindrome Checker

// Imagine you're designing a text-processing feature for a popular word editor. A user types in a string, and your task is to determine whether the string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward, ignoring spaces, punctuation, and capitalization. To achieve this, you need to write a function that accepts a string input and returns true if it's a palindrome and false otherwise.

var isPalindrome = function (s) {
    // Your code goes here
	 s = s.split(' ').join('').toLowerCase().replace(/[\d\s\W_]/g, '');
	let isPallindrome = true
    let start = 0, end = s.length-1 
    while(start <= end){
		if(s[start] !== s[end]){
			isPallindrome = false
			return false
		}
		start++
		end--
	}
	return isPallindrome
};

console.log(isPalindrome("A man a plan a canal Panama"));



