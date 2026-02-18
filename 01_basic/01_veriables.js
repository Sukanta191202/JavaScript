const accountId = 12245;
let accountEmail = "Dua@google.com";
var accoubtPassword = "12521"
accountCity = "Kolkata";
let accountState;

// accountId =  31125;    // this will throw an error because accountId is a constant and cannot be reassigned

accountEmail = "kanai@gmial.com";
accountCity = "Delhi";

console.log(accountId);
console.table([accountId,accountEmail,accoubtPassword,accountCity,accountState]);


//const --> cannot be reassigned, must be initialized at the time of declaration
//let --> can be reassigned, can be initialized at the time of declaration or later
//var --> can be reassigned, can be initialized at the time of declaration or later, function scoped .

/*
   Prefer not to use var
    beacuse of issuse in block scope and function scope, it can lead to unexpected behavior and bugs in the code.
*/