// primitive Datatypes

// are of 7 types :
// String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100
const scoreValue = 10.66

const isLoggedIn = false
const tempoutside = null
let userEmail;

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");


console.log(sym2 === sym3); // false


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktimaan", "naagraaj"]; // array

let myObj = {      // object
    name: "uday",
    age: 19,

}

const myFunction = function(){     // function 
    console.log("hello Duniya");
}

console.log(typeof heros); // to find type of datatype