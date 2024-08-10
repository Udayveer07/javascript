// if

const isUserLogged = true
const temp = 41

if (temp > 50) {
    console.log("less than 50");
}
else{
    console.log("more than 50");
}

console.log("Always Executed");

if (2 === "2") {
    console.log("Not Found");
}

// types of operators in conditions 
// <, >, <=, >=, ==, !=, ===(used for type checking), !== 

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`Power of User is ${power}`);   
}

// console.log(`Power of User is ${power}`);   


const balance = 1000

if (balance < 500) {
    console.log("less than 500");
}
else if (balance < 750) {
    console.log("less than 750");
}
else if (balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = false
const loggedInFromGoogle = true


if (userLoggedIn && debitCard) {  // in && operator all cond should be true
    console.log("Allowed to buy this course");
}

if(loggedInFromEmail || loggedInFromGoogle) { // in || operator any one cond should be true
    console.log("User is Logged IN")
}

