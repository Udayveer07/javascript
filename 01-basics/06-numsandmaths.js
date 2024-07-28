const score = 400 
console.log(score);

const balance = new Number(100)
console.log(balance);

// Methods of number
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 29475.336
console.log(otherNumber.toPrecision(7));


const otherNumber2 = 1000000
console.log(otherNumber2.toLocaleString('en-IN'));

//++++++++++++++++ Maths +++++++++++++++++++++++++

// different methods used in math
console.log(Math);
console.log(Math.abs(-8)); // gives positive result
console.log(Math.round(5.889)); // roundoff the value
console.log(Math.min(2,5,8,4,9)); // gives minimum value
console.log(Math.max(2,5,8,4,9)); // gives maximum value

console.log(Math.random()); // to get random value between 0 and 1
console.log((Math.random()* 10) + 1); // to get random value between 1 and 10

// Using Math.floor to get a particular value 
console.log(Math.floor(Math.random()* 10) + 1); 


// use case when given Min and Max

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1)) + min);