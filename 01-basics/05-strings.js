const name = "Udayveer"
const repoCount = 50

// console.log(name + repoCount + "Done"); // old and dirty method

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); // string interpolation

const gameName = new String('udayveer-singh-2032')

console.log(gameName[2]);
console.log(gameName.__proto__);

//Methods used in strings
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('y'));


const newString = gameName.substring(0, 4) // => 0, 1, 2, 3
console.log(newString);

const anotherString = gameName.slice(0, 4) // cannot have negative values in position
const anotherString2 = gameName.slice(-8, 4) // can have -ve values

console.log(anotherString);
console.log(anotherString2);

const newStringOne = "    Uday    "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https ://udayveersingh/udayveersingh2032"

console.log(url.replace('2032', "07"));
console.log(url.includes('singh'));


console.log(gameName.split('-'));