// Reduce method

const myNums = [1, 2, 3]

const sumOfNums = myNums.reduce( function (acc,curval) {
    console.log(`acc :${acc} and curval ; ${curval}`)
    return acc + curval
}, 0)

console.log(sumOfNums);


// Could also be written using arrow func
const myTotal = myNums.reduce( (acc,curval) => acc + curval, 1)

console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "android course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    }
]

const cartTotal = shoppingCart.reduce( (acc,curval) => acc + curval.price, 0)

console.log(cartTotal);
