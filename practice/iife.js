//Immediately invoked function
//An Immediately Invoked Function Expression (IIFE) in JavaScript is a function expression that is defined and executed immediately after its creation. The primary use of IIFE is to create a private scope for variables, preventing them from polluting the global scope.

(function dataBase(){
    console.log("DB CONNECTED");
}) ();

(()=> {console.log("DB CONNECTED TWO")})()

//IIFE allows you to create a private scope for variables, functions, and other declarations, helping to avoid naming conflicts and unintended global scope pollution.