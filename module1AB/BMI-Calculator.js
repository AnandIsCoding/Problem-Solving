function calculateBMI(weight, height) {
    // Write your code here
   if(isNaN(weight) || isNaN(height)  || weight<=0 || height <=0 || typeof weight === "undefined" || typeof height === "undefined"){
        return 'Invalid input'
    }
    // Even if the inputs are strings (e.g., "70kg", "1.75m"), parseFloat will convert valid numeric portions into numbers.
    weight = parseFloat(weight)
    height = parseFloat(height)
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi< 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
let result = calculateBMI(45,1.60)
console.log(result)                        // Underweight
console.log(calculateBMI(undefined,1.60))  // Invalid input
console.log(calculateBMI(45,0))            // Invalid input

// Do not modify the below lines
module.exports = { calculateBMI };