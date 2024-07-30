// singleton 
Object.create

// creating a symbol 
const mysym = Symbol ("key1")
// object literals
 const jsUser = {
    name: "Udayveer",
    "full name": "Udayveer Singh",
    age: 18,
    [mysym]:"mykey1",
    location: "Chandigarh",
    emailId: "Udayveersingh@google.com",
    isLoggedIn: false
 }

 console.log(jsUser.emailId);
 console.log(jsUser["emailId"]);
 console.log(jsUser["full name"]);
 console.log(jsUser[mysym]);

 jsUser.emailId = "udayveer@2032.com"
//  Object.freeze(jsUser) // freezes the object so no changes could be done 
 jsUser.emailId = "udayveer07@gmail.com"
 console.log(jsUser.emailId)
 

 // Functions in js

 jsUser.greeting = function(){
    console.log("hello JS User");
 }


 jsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`);
 }

 console.log(jsUser.greeting());
 console.log(jsUser.greetingTwo());