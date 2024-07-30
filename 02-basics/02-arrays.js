const marvelHeros = ["captian America", "Thor", "Hulk", "Ironman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);

// const newArr = marvelHeros.concat(dcHeros)
// console.log(newArr);

const myHeros = [...marvelHeros, ...dcHeros] // spread operator
console.log(myHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

let usableArr = anotherArr.flat(Infinity)
console.log(usableArr);


console.log(Array.isArray("udayveer")); // to check if it is an array
console.log(Array.from("udayveer")) // to convert into array

console.log(Array.from({name:"udayveer"})) // interesting case

let score1 = 100
let score2 = 300
let score3 = 500

console.log(Array.of(score1, score2, score3));