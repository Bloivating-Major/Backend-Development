// require('./app');

// This is how you import it
// const obj = require('./sum');
// const {calculateSum, Name} = require('./sum'); // This is how you destructure it.

// new way to import
// import { calculateSum, Name } from "./sum.js";


// let a = 10;
// let b = 10;

// calculateSum(a, b);
// console.log(Name);

// console.log(module.exports);


// ➖➖➖➖➖➖➖➖➖

// z = "Non Strict Mode";
// console.log(z); // output is "Non Strict Mode";


// ➖➖➖➖➖➖➖➖➖
// importing modules 
// const { calculateSum } = require("./calc/sum");
// const { calculateMul } = require("./calc/multiply");
// let a = 10;
// let b = 10;

// calculateSum(a, b);
// calculateMul(a, b);

// console.log("This is Server JS File");

// ➖➖➖➖➖➖➖➖➖

const {calculateMul, calculateSum} = require('./calc');
let a = 10;
let b = 10;

calculateSum(a, b);
calculateMul(a, b);

console.log("This is Server JS File");

// ➖➖➖➖➖➖➖➖➖


// Output
// This is Application JS File
// Sum is 20
// Sambhav
// This is Server JS File
