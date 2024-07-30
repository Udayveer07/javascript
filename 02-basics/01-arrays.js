// array

const myArr =  [0, 1, 2, 3, 4, 5]
const myHeros = ["captian America", "Thor", "Hulk"]

const myArr2 = new Array(2, 3, 4, 5)

console.log(myArr[1]);


// Methods of arrays
myArr.push(8)
myArr.push(9)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(6)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(7));
console.log(myArr.indexOf(4));

const newArr = myArr.join() // join binds the array and converts it into a string.

console.log(myArr);
console.log(newArr);

// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // prints a portion of array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // removes a portion of array from the main array
console.log("C ", myArr);
console.log(myn2); 