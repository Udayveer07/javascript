// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // IIFE named chai
    console.log(`DB CONNECTED`);
})();    // () is used for immediate execution of the code

// Above function can also be written as 

( () => {                        // using the arrow function
    console.log(`DB CONNECTED 2`);
})();

( (name) => {                        // using parameters
    console.log(`DB CONNECTED 2 ${name}`);
})("Udayveer");