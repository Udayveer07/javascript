const accountId = 1445332
let accountEmail = "udayveersingh2032@gmail.com"
var accountPassword = "12345"
accountCity = "Chandigarh"
let accountState

// accountId = 2 // not allowed

accountEmail = "uday@gmail.com"
accountPassword = "14555656"
accountCity = "Delhi"

console.log(accountId);

/*
prefer not to use of var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])