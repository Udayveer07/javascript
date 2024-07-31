// scoping of variables

let a = 100
const b = 200
var c = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30

    console.log("Inner a: ", a);
    console.log("Inner b: ", b);
    console.log("Inner c: ", c);
}

console.log("Outer a: ", a);
console.log("Outer b: ", b);
console.log("Outer c: ", c);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

function one(){
    const username = "udayveer"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); will give an error

    two()

}
one()

if (true){
    const username = "udayveer07"
    if (true) {
        const website = "yt"
        console.log(username + website);
    }
    // console.log(website); error
}

// console.log(username) error due to scope not available

// +++++++++++++++++++++++++++ Interesting Example ++++++++++++++++++++++++++

console.log(addone(5)); // can be accessed anywhere with this declaration 

function addone(num) {
    return num + 1
}


const addTwo = function(num2){  // also called as a expression 
    return num2 + 2
}

addTwo(5) // Could only be Accessed after declaration 
