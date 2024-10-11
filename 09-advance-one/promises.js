const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async Task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 2000)

}).then(function(){
    console.log("Async 2 done");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "Chai@example.com"})
    }, 3000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true // false
        if (!error){
            resolve({username: "Udayveer", email: "Udayveer@example.com"})
        } else {
            reject('ERROR; Something went wrong')
        }

    },4000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log('The promise is either resolved or rejected'))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true // false
        if (!error){
            resolve({username: "Javascript", email: "Udayveer@example.com"})
        } else {
            reject('ERROR; JS went wrong')
        }
    }, 5000)
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
   console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()

async function getAllUsers() {
  try {
   const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await response.json()
   console.log(data);
  } catch (error) {
    console.log("E:",error)
  }
}

getAllUsers()

// doing the same function getAllUsers by then and catch

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))