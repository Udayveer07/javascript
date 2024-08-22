// for of 

let arr = [1, 2, 3, 4, 5, 6] // on Array

for (const num of arr) {
    console.log(num);
    
}

let greeting = "Hello World" // of String

for (const greet of greeting) {
    console.log(greet)
}


// Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('FR', "FRANCE")
map.set('CA', "CANADA")

console.log(map);

// For of loop for map
for (const [key, value] of map) {
    console.log(key, '-', value);
}

const myObject = {
    game1 : 'NFS',
    game2: 'BGMI',
    game3 : 'COD'
}

// below given loop will not work objects are not iteratable

// for (const [key, game] of myObject) {
//     console.log(key, '-', game);
// }
