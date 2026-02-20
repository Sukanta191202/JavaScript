      // -------- Number to Number comparison --------


     //console.log("Number Comparison =====>");
    
    //   console.log(2 > 1);   //true
    //   console.log(2 < 1);   //false
    //   console.log(2 == 1);  //false
    //   console.log(2 >=1);   //true
    //   console.log(2 <= 1);  //false
    //   console.log(2 != 1);  //true


        // -------- String to String comparison --------

    //  console.log("String Comparison =====>");
      
    //   console.log("a" > "b");  //false
    //   console.log("a" < "b");  //true
    //   console.log("a" == "b");  //false
    //   console.log("a" >= "b");  //false
    //   console.log("a" <= "b");  //true
    //   console.log("a" != "b");  //true



  // -------- String to Number comparison --------

    //   console.log("String to Number Comparison =====>");

    //   console.log("2" == 1);     // false
    //   console.log("2" >= 1);     // true
    //   console.log("02" >= 1);    // true
    //   console.log(typeof("02"));  // string
      
      
// ---------  null and undefined comparison --------

     console.log("null and undefined Comparison =====>");

     console.log(null > 0);   //false  --- > Line (1)
     console.log(null < 0);   //false
     console.log(null >= 0);  //true   =>  that's why comparison check -----> Line (3)
     console.log(null <= 0);  //true  
    //  console.log(null != 0);  //true

    //  console.log(null == 0);  //false  => that's why euality check
    //console.log(null == "" );   //false
     
/* Note : [The reason is that an equality check == and comparisons > < >= <= work differently.
           Comparisons convert null to a number, treating it as 0.
           That’s why (3) null >= 0 is true and (1) null > 0 is false.] 
*/


    //  console.log(undefined > 0);    //false 
    //  console.log(undefined < 0);    //false
    //  console.log(undefined == 0);   //false

    //  console.log(null >= undefined);   //false
    //  console.log(null <= undefined);   //false
    //  console.log(null == undefined);   //true

    


     // --------- Strict Equality Check (===) --------

        console.log("Strict Equality Check (===) =====>");
        
         console.log( 2 === "2");  // false
         console.log( "12" === 1 + "2");  // true 
         
         

