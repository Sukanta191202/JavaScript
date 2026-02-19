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

// console.log(valueInBoolean);
// console.log(typeof valueInBoolean);

// 1 => true
// 0 => false
// "Sukanta" => true
// "" => false
// null => false
// undefined => false


                  //  Opertaions / conversion confusion


    let value = 3
    let negValue = -value

    // console.log(negValue);
    
    // console.log(1 + 2);    // =>  3
    // console.log(1 - 2);    // =>  -1
    // console.log(2 * 2);    // =>  4
    // console.log(2 ** 3);   // =>  8
    // console.log(10 % 3);   // =>  2
    // console.log(2 / 3);    // =>  0.6666666666666666
    

    
    // console.log(3 + 3);           // => 6
    // console.log( 1 + "2");        // => "12"
    // console.log( "1" + 2);        // => "12"
    // console.log( 1 + "2" + 2);    // => "122" because 1 + "2" => "12" and then "12" + 2 => "122"
    // console.log("1" + 2 + 2);     // => "122" because "1" + 2 => "12" and then "12" + 2 => "122"
    // console.log( 1 + 2 + "2");    // => "32" because 1 + 2 => 3 and then 3 + "2" => "32"
    
    
    
    
    