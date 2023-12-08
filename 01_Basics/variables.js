const accountId = 15678
let accountEmail = "amanakash@google.com"
var accountPassword ="12345"
accountCity = "bangalore"
// console.log(accountId);

accountEmail = "akash@gmail.com"
accountPassword = "333333"
accountCity = "mumbai"

/*
prefer not to use Var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);