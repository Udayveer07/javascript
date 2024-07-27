let score = "uday"  // true  // undefined // null // "33abc" // "33"

// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// console.log(valueInNumber);

// "33" => 33
// "33abc" or "Uday" => NaN
// null => 0
// undefined => NaN
// true => 1 ; false => 0

let isLoggedIn = "uday" // 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false ; "uday" => true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);


// *************************** Operations **************************************

let value = 3
let negValue = -value

// console.log(negValue);

console.log(2+2); // addition
console.log(2-2); // subtract
console.log(2*2); // multiple
console.log(2**3); // power
console.log(2/3); // divide
console.log(2%3); // remainder


let str1 ="hello"
let str2 = " uday"

let str3 =str1 + str2
console.log(str3);

console.log("1"+ 2);
console.log(1 + "2");

console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;   // pre & post increment & decrement

console.log(gameCounter);


// done