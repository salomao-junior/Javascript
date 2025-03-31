//Forecast today - Kelvin
const kelvin = 0;

//Celsius is similar to Kelvin
//Difference is that Celsisus is 273 degrees less than Kelvin
const celsius = kelvin - 273;

//Equation to calculate Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

//Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

//Convert Celsius to Newton Scale
const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton`);
