"use strict";  // treat all js code as newer version
// this will enable strict mode in JavaScript, which helps catch common coding mistakes and "unsafe" actions such as assigning values to undeclared variables.


//alert ("Welcome to JavaScript");  // we are using node js not browser.

console.log( 3 
    + 3);  // code readability should be high.

console.log("Sukanta");


    // ---------------- DataTypes -----------------
               //Premitive Data Types
        let name =  "Sukanta";
        let age = 23;
        let isStudent = true;
        let college = null;
        let result = undefined;
        let id = Symbol("id");
        let bigNumber = BigInt(1234567890123456789012345678901234567890);

        console.table([name, age, isStudent, college, result, id, bigNumber]);

        console.log(typeof name);  // string
        console.log(typeof age);   // number
        console.log(typeof isStudent);  // boolean
        console.log(typeof college);  // object (this is a quirk in JavaScript, null is considered an object)
        console.log(typeof result);  // undefined
        console.log(typeof id);  // symbol
        console.log(typeof bigNumber);  // bigint   


          // Non-Primitive Data Types
          let person = {
            name : "sukenta",
            age : 23,
            isStudent : true,
          };

          // Arrays
          let numbers = [1, 2, 3, 4, 5];

          function greet() {
            console.log("Good Students");
          }


        console.table([person, numbers, greet]);
        
        console.log(typeof person);  // object
        console.log(typeof numbers);  // object
        console.log(typeof greet);  // function
        




// 1. Primtive Data Types ---->
   // a. String  => "Hello", 'World', `!` (template literals)
   // b. Number  => 123, 3.14, -5, etc. (2 to the powe of 53 -1)
   // c. Boolean => true / false
   // d. Null => standalone value
   // e. Undefined => 
   // f. Symbol (ES6) => unique and immutable data type, often used for object property keys to avoid name collisions.
   // g. BigInt (ES2020) => for representing integers larger than 2^53 - 1, which is the maximum safe integer in JavaScript.

// 2. Non-Primitive Data Type ---->
   // a. Objects => { name: "Sukanta", age: 30 }, { id: 1, title: "JavaScript" }, etc.
   // b. Arrays => [1, 2, 3], ["a", "b", "c"], etc.
   // c. Functions => function greet() { console.log("Hello!"); }, () => console.log("Hi!"), etc.