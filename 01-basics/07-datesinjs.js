// dates 

let mydate = new Date()

console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);

let mycreatedDate = new Date(2023, 0, 23)
console.log(mycreatedDate.toDateString());

let newcreatedDate = new Date(2024, 6, 28, 20, 35)
console.log(newcreatedDate.toLocaleString());
console.log(newcreatedDate.getTime());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth())


newDate.toLocaleString('default', {
    dateStyle : "full"
})

console.log(newDate.toLocaleString());