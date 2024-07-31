// Fuctions 

function sayMyName(){
    console.log("U");
console.log("D");
console.log("A");
console.log("Y");
console.log("V");
console.log("E");
console.log("E");
console.log("R");
}

sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(3, 4)
addTwoNumbers(3, "4")
addTwoNumbers(3, "a")

function addTwoNumbers2(num1, num2){
    let result = num1 + num2         // another method is return num1 + num2
    return result
}

 const sum = addTwoNumbers2(3,7)
 console.log("sum :", sum);


 function loginUserMessage(username)
 {
    if (username === undefined) {
       console.log("PLease enter a username");
       return
    }
     return `${username} just logged in`
 }

 console.log(loginUserMessage("Udayveer"));
 console.log(loginUserMessage());


 function calculateCartPrice(val1, val2, ...numb1) // rest operator (... )
{
    return numb1
}
console.log(calculateCartPrice(200, 300, 400, 320));


const user ={
    name : "Udayveer",
    price : "599"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

handleObject(user)

// or we can also direct pass an object into the function
handleObject({
    name : "uday2032",
    price : 5000
})

//also Array could be passed into a function

myNewArray = [100, 2000, 300, 400]
function returnSecondValue (getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 300, 400, 500, 600, 700]));