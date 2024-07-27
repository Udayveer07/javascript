console.log(2>1); // greater than
console.log(2>=1); // greater than equal to
console.log(2<1);  // less than
console.log(2<=1); // less than equal to
console.log(2==1); // equal to
console.log(2!=1); // not equal to


console.log("2" > 1); // different datatypes
console.log("02" > 1);


// avoid these type of comparisions 
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true  unpredictable

// strict check  (uses ===)
console.log("2" === 2);