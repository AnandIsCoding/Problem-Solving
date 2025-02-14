//  Problem: Given an integer num, return the N-th prime number. Prime numbers are integers greater than 1 that have no divisors other than 1 and    themselves. Your task is to find and return the N-th prime number efficiently.
// 9 ----> 23 


function main() {
    var num = parseInt(readLine());
    console.log(PrimeMover(num));
}
function PrimeMover(num) {
   // Your code goes here
   let arr = []
   const isPrime = (n) =>{
    if(n <= 1) return false
      if(n === 2) return true
      for(let i=2;i<=Math.sqrt(n);i++){
        if(n % i ===0 ) return false
      }
      return true     
   }

   
   let i=2
   while(arr.length < num){
    if( isPrime(i)){
      arr.push(i)
    } 
    i++
    }
   return arr[num-1]

}