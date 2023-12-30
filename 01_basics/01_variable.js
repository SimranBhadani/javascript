const accountId = 14455
let accountEmail = "simran@1234"
var accountPassword = "123456"
accountCity = "Delhi"
let accountState; // if not assign value gives output->undefined

//accountId = 6  // not allowed since it is constant

accountEmail = "simmo@1235.com"
accountPassword = "2156345"
accountCity = "Mumbai"


console.log(accountId);

/*
prefer not to use var
bcz of issue in block scope and functional scope
*/
console.log([accountId, accountEmail, accountCity, accountPassword, accountState]);
