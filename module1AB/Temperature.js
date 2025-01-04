function convertTemperature(temperature, unit) {
    // Write your code here
    if(isNaN(temperature)) return "Invalid input: Please provide a valid temperature."
    temperature = parseFloat(temperature)
    // Convert based on the unit provided
    if (unit === "C") {
        //Convert Celsius to Fahrenheit    Fahrenheit = Celsius * 9/5 + 32.
        const fahrenheit = temperature * 9/5 + 32;
       // .toFixed(2): to display output with two decimal places.
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        //Convert Fahrenheit to Celsius    Celsius = (Fahrenheit - 32) * 5/9.
        const celsius = (temperature - 32) * 5/9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}
console.log(convertTemperature("37.5", "C")); // 99.50 F
console.log(convertTemperature("98.6", "F")); // 37.00 C
console.log(convertTemperature("abc", "C")); // Invalid input: Please provide a valid temperature.
console.log(convertTemperature("100", "X")); // Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.