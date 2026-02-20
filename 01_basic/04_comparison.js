      // -------- Number to Number comparison --------


//      console.log("Number Comparison =====>");
    
//       console.log(2 > 1);   //true
//       console.log(2 < 1);   //false
//       console.log(2 == 1);  //false
//       console.log(2 >=1);   //true
//       console.log(2 <= 1);  //false
//       console.log(2 != 1);  //true


//         // -------- String to String comparison --------

//      console.log("String Comparison =====>");
      
//       console.log("a" > "b");  //false
//       console.log("a" < "b");  //true
//       console.log("a" == "b");  //false
//       console.log("a" >= "b");  //false
//       console.log("a" <= "b");  //true
//       console.log("a" != "b");  //true



//   // -------- String to Number comparison --------

//       console.log("String to Number Comparison =====>");

//       console.log("2" == 1);     // false
//       console.log("2" >= 1);     // true
//       console.log("02" >= 1);    // true
//       console.log(typeof("02"));  // string
      
      
// // ---------  null and undefined comparison --------

//      console.log("null and undefined Comparison =====>");

//      console.log(null > 0);   //false  --- > Line (1)
//      console.log(null < 0);   //false
//      console.log(null >= 0);  //true   =>  that's why comparison check -----> Line (3)
//      console.log(null <= 0);  //true  
//      console.log(null != 0);  //true

//      console.log(null == 0);  //false  => that's why euality check
//      console.log(null == "" );   //false
     
// /* Note : [The reason is that an equality check == and comparisons > < >= <= work differently.
//            Comparisons convert null to a number, treating it as 0.
//            That’s why (3) null >= 0 is true and (1) null > 0 is false.] 
// */


//      console.log(undefined > 0);    //false 
//      console.log(undefined < 0);    //false
//      console.log(undefined == 0);   //false

//      console.log(null >= undefined);   //false
//      console.log(null <= undefined);   //false
//      console.log(null == undefined);   //true
//      console.log(null === undefined);  //false

    


//      // --------- Strict Equality Check (===) --------

//         console.log("Strict Equality Check (===) =====>");
        
//         console.log( 2 === "2");  // false
//         console.log( "12" === 1 + "2");  // true 
         


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

       // -------- Stack and Heap Memory --------

       //  Stack(Premitive data types) And Heap(Non-premitive data types)----->

       console.log("Stack memory ====>");
       
       let mySystemName = "Computer Windows 11";

       let anotherSystemName = mySystemName;
       anotherSystemName = "Macbook Air M2";

       console.log(mySystemName);
       console.log(anotherSystemName);

       console.log();

       console.log("Heap memory ====>");

       let userOne = {
          email : "sukanta@gmail.com",
          upi : "sukanta@ybl"
       };

       let userTwo = userOne;
       userTwo.email = "dua@gmail.com"

       let userThree = {...userOne};     //{...userOne}  =>  Spread operator is used to create a shallow copy of the object.
       userThree.email = "kanai@gmail.com"


     console.log(userOne);
     console.log(userTwo);
     console.log(userThree);
     
     

     console.log();
     
     console.log(userOne.email);
     console.log(userTwo.email);
     console.log(userThree.email);
     


 /* Note :-  
     When we store something in stack memory (like primitive data types), we get a copy of the value.

     But when we store something in heap memory (like objects, arrays, etc.), we get a reference to that value, not the actual copy.

     Spread operator is used to create a shallow copy of the object, which means it creates a new object with the same properties and values as the original object. This way, userThree is a new object that has the same properties and values as userOne, but it is not the same reference in memory. So when we change the email property of userTwo, it does not affect userThree, because they are different objects in memory. 

     
 */
     