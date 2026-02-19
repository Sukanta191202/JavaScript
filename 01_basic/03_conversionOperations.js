         //-------- Number conversion --------        
// let score = 33
// let score = "33"
// let score = "33.44"
// let score = "33abc"
// let score = true
// let score = false
// let score = null
// let score = undefined  
let score = "Sukanta"

// console.log(typeof score);
// console.log(typeof (score));


let valueInNumber = Number(score);

// console.log(valueInNumber);
// console.log(typeof valueInNumber);

//  "33" => 33
// "33.44" => 33.44
// "33abc" => Nan (Not a Number)
// true => 1 ; false => 0;
// null => 0
// undefined => NaN
// "Sukanta" => NaN


//-------- String conversion --------
// let someNubmer = 33
// let someNumber = true
// let someNumber = null
// let someNumber = undefined
let someNumber = 2+2

let valueInString = String(someNumber)

// console.log(valueInString);
// console.log(typeof valueInString);

// 33 => "33"
// true => "true"
// null => "null"
// undefined => "undefined"
// 2+2 => "4"


// -------- Boolean conversion --------

// let isLogedIn = 1
// let isLogedIn = 0
// let isLogedIn = "Sukanta"
// let isLogedIn = ""
// let isLogedIn = null
let isLogedIn = undefined

let valueInBoolean = Boolean(isLogedIn)

console.log(valueInBoolean);
console.log(typeof valueInBoolean);

// 1 => true
// 0 => false
// "Sukanta" => true
// "" => false
// null => false
// undefined => false