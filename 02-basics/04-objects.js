// declare the object using constructor

const tinderUser = new Object() // singleton object
const tinder1 = {} // non singleton object

tinderUser.id = "12432uy"
tinderUser.name = "Udayveer"
tinderUser.age = 19

console.log(tinderUser);
console.log(tinder1);

const regularUser = {
    email: "uday@23032.com",
    fullname: {
        userfullname: {
            firstname: "udayveer",
            lastname: "Singh"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const objt1 = {1: "a", 2: "b"}
const objt2 = {3: "a", 4: "b"}

// const objt3 = {objt1, objt2}

const objt3 = Object.assign({}, objt1, objt2) // {} acts as a target object
console.log(objt3);

const obj3 = {...objt1, ...objt2} // spread method
console.log(obj3);


const users = [
    {
        id: 1, 
        email: "udayveer@gmail.com"
    },
    {
        id: 1, 
        email: "udayveer@gmail.com"
    },
    {
        id: 1, 
        email: "udayveer@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // Output in form of array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Udayveer"
}

// course.courseInstructor

const {courseInstructor : instructor} = course // destructing an object

// console.log(courseInstructor);
console.log(instructor);