//Problem: Given two integers, left and right, write a program that returns a list of all self-dividing numbers within the inclusive range [left,right].

// Definition of a Self-Dividing Number: A self-dividing number is defined as: A number that is divisible by every one of its digits (except for zero). A number cannot contain the digit zero.

const selfDividingNumbers = function(left, right) {
    // Your Code Goes Here
      let numbers = []
      for(let i=left;i<=right;i++){
          let num = i
          let flag = true, digit
          while(num > 0){
              let rem = num % 10
              digit = rem
              if(i % digit !== 0 ){
                  flag = false
                  break;
              }else{
                  flag = true
              }
              num = Math.floor(num/10)
          }
          if(flag){
              numbers.push(i)
          }
      }
      return numbers
}
console.log(selfDividingNumbers(1,22))   // [ 1, 2, 3,  4,  5,  6, 7, 8, 9, 11, 12, 15, 22 ]