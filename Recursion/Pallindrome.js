const isPalindrome = (arr, start = 0, end = arr.length - 1) => {
    // Base case: If start crosses end, it's a palindrome
    if (start >= end) return true; 

    // Check if characters match
    if (arr[start] !== arr[end]) return false;

    // Recursive call
    return isPalindrome(arr, start + 1, end - 1);
};

console.log(isPalindrome([1, 2, 3, 2, 1])); // true
console.log(isPalindrome([1, 2, 3, 2, 2])); // false
