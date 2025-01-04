**BMI Calculator**
**Write a JavaScript function calculateBMI that calculates a person's Body Mass Index (BMI) based on their weight and height, and returns a corresponding health classification. The BMI is a commonly used indicator of body weight status and health.**
**The function should take two arguments** : weight (in kilograms) and height (in meters), and should determine the health classification based on the calculated BMI. To calculate the BMI use the formula: BMI = weight / (height * height)
The function should return the health classification as a String. Determine the health classification based on the calculated BMI:
If BMI is less than 18.5, the person is classified as "Underweight".
If BMI is between 18.5 (inclusive) and 24.9 (exclusive), the person is classified as "Normal weight".
If BMI is between 25 (inclusive) and 29.9 (exclusive), the person is classified as "Overweight".
If BMI is 29.9 or higher, the person is classified as "Obese".
**Input**: 65, 1.75                  **Input**: 45, 1.60
**Output**: "Normal weight"          **Output**: "Underweight"



**Temperature Converter**
**Write a JavaScript function convertTemperature that converts temperatures between Celsius and Fahrenheit scales, providing a flexible tool for users to switch between these two common temperature units.**
The function should take two arguments: temperature and unit, where temperature is the numeric value of the temperature to be converted, and unit is a string indicating the initial temperature unit ("C" for Celsius or "F" for Fahrenheit).
The function should return the converted temperature value rounded to two decimal places with converted scale as a String.
If unit is "C", convert the Celsius temperature to Fahrenheit using the formula: Fahrenheit = Celsius * 9/5 + 32.
If unit is "F", convert the Fahrenheit temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.
If unit is neither "C" nor "F", then it should return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit".
console.log(convertTemperature("37.5", "C")); // 99.50 F
console.log(convertTemperature("98.6", "F")); // 37.00 C
console.log(convertTemperature("abc", "C")); // Invalid input: Please provide a valid temperature.
console.log(convertTemperature("100", "X")); // Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.


**Tip Calculator**
**Write a JavaScript function calculateTip that calculates the total amount to be paid, including the tip, based on the bill amount and a specified tip percentage.**
The function should take two arguments: billAmount (the total bill amount) and tipPercentage (the tip percentage to be applied, expressed as a decimal). Calculate the tip amount by multiplying the billAmount by the tipPercentage and add the calculated tip amount to the billAmount to get the total amount to be paid.
The function should return the total amount to be paid, rounded to two decimal places as a Number.
Input: 60.75, 0.25
Output: 75.94


**Palindrome Checker**
**Write a JavaScript function isPalindrome that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same forwards and backwards (ignoring spaces, punctuation, and capitalization).**
The function should take one argument: str (string), and should perform the following steps:
Convert the input string to lowercase.
Remove any non-alphanumeric characters (including spaces and punctuation) from the string.
Compare the modified string with its reverse to determine if it is a palindrome.
The function should return a boolean value indicating whether the input string is a palindrome.
Input: "RaceCar"               Input: "Hello"
Output: true                   Output: false



**Title Case**
**Write a JavaScript function called titleCase which accepts a sentence (string) as input and transforms it into title case.**
Title case means that the initial letter of each word is capitalized.
Input: "Dream big, work hard, and stay focused"
Output: "Dream Big, Work Hard, And Stay Focused"


**Count Occurrences of a Character**
**Write a JavaScript function countOccurrences that takes a string and a character as input and returns the count of occurrences of that character in the sentence string.**
Input: "hello world", "l"        Input: "Elephant", "E"
Output: 3                        Output: 1
**Note** : Characters are case-sensitive. For example, "AlmaBetter" contains 1 A and 1 a.