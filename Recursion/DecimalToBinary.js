// Do not remove nor make any changes in  main() function
function main() {
    var decimal_number = parseInt(readLine());
    console.log(find(decimal_number));
}
const  find = function(decimal_number)
{
    // your Code Goes Here
	if(decimal_number == 1){
		return 1
	}
	return  find(Math.floor(decimal_number/2)) + `${decimal_number%2}`   
};


// Test cases 10 ------> 1010



// Decimal to binary number using recursion
// Easy
// The questions is to convert a decimal number into its binary representation using a recursive function. This involves repeatedly dividing the number by 2 and recording the remainders. The process continues until the number becomes 0. For example, converting the decimal number 10 to binary involves the steps: 10 mod 2 = 0, 5 mod 2 = 1, 2 mod 2 = 0, 1 mod 2 = 1. Therefore, the binary representation is 1010.