const userEmail = "uday@2032.com"

if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("Donot have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

const emptyArr = []

if(emptyArr.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

// Nullish coalescing Operator (??): null undefined

let val1, val2, val3;
val1 = 5 ?? 10
val2 = null ?? 7
val3 = undefined ?? 15

console.log(val1);
console.log(val2);
console.log(val3);


// Terniary operator

// if statement could be written as
// condition ? true : false

const teaPrice = 100

teaPrice > 100 ? console.log("Too Expensive") : console.log("Lets Drink");

