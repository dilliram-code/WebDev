//Our kitchen (object)
/*Imagine you have a Chef (a function) in a kitchen (an object). 
The Chef has access to various ingredients (properties) and cooking
methods (methods) within that kitchen.
The Chef's actions depend on the context of the kitchen they are in. 
Now, let's translate this analogy into a simpler JavaScript example:
*/ 

var kitchen = {
    ingredients: ['flour', 'sugar', 'egges'],
    prepare: function () {
        console.log('Preparing a dish with ' + this.ingredients.join(", "));
    }
};

//The chef (function)
function chef(){
    console.log("I am the Chef!");
    this.prepare();
};

//The Chef function() is assigned to work in the kitchen
chef.call(kitchen);


//My Own Example:
//Object Creation
const myObject = {
    name: "Dilliram",
    location: "Kathmandu",
    hobbies: ['Nature Exploration', 'Sciece fiction movies'],
    action: function (){
        console.log("My hobbies in the spare time includes " + this.hobbies.join(", "));
    }
};

//Function creation
function performance(){
    console.log('I am '+ this.name);
    this.action();
};

//the performance function is assingned to action in the object
performance.call(myObject);

