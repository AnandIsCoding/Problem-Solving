// Do not remove nor make any changes in  main() function
function main() {
    var N = parseInt(readLine());
    console.log(isPowerOf2(N));
}
function isPowerOf2(N) {
  // Your code goes here
  if(N === 1) return true
  if(N%2 !== 0){
	return false
}  else{
	return isPowerOf2(Math.floor(N/2))
  } 
  
}



// Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2x. Write a function that checks if the given number n is a power of 2.