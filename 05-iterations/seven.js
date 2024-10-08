// usage of map to get values

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const newNums = myNums.map( (num) => num + 10 )
 const newNums2 = myNums2.map( (num2) => { return num2 + 10} )

 console.log(newNums);
 console.log(newNums2);
 

 // Chaining methods  in this method the value of previous func passes to next func

const newNums3 = myNums
                   .map((num) => num * 10)
                   .map((num) => num + 1 )
                   .filter( (num) => num >= 40)

console.log(newNums3);
