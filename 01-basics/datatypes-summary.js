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


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Types of Memory :
// Stack (Primitive)  => copy of memory , Heap (Non-Primitive) => refered to main memory

let myYoutubeName ="udayveersingh"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "abc@gmail.com",
    age: 18
}

let userTwo = userOne

userTwo.email = "udayveer@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);