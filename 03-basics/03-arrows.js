const user ={
    username : "Udayveer",
    price : "999",

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "Puneet"
// user.welcomeMessage()

console.log(this);

function chai(){
    let username = "Udayveer"
    console.log(this.username);
}

chai()

const code = () => {              // => is a arrow function
    let username = "Udayveer"
    console.log(this);
}

code()


const addTwo = (num1,num2) => { // can also be written as 
    return num1 + num2          // const addTwo = (num1,num2) => (num1 + num2)
}

console.log(addTwo(5,6));
