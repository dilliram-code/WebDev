// 'use strict'
//Creating object using object literals 
const cirlce = {
  radius: 1,
  location: {
    x: 2,
    y: 3
  },
  draw: function () {
    console.log("drawing");
  }
}
// cirlce.draw()


//Factory Function ==> Better way to create an object if it has a method
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("drawing");
    }
  }
}

// const circle = createCircle(1);
// circle.draw()

//Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  }
}

const another = new Circle(1);

//Primitive and reference Types

//Primitive type ==> copy by the value
let x = 10;
let y = x;

// console.log("The value of y: ", y)
// console.log("The value of x: ", x)


//Reference types
let number = 10;
function increase(number) {
  number++;
}

increase(number);
// console.log(number);

//Reference type
let obj = { value: 20 };
function increase(obj) {
  obj.value++;
}
increase(obj);
// console.log(obj);
//The value property of the object will be increased by 1.




//------------------------------------ OBJECT -----------------------------
//Object can be defined in three ways:
// 1.By object literal
// 2.By using new word
// 3.By using constructor function



//--------------------------------- using Object literal----------------------

let myObject = {
  firstName: "Dilli",
  lastName: "Chaudhary",
  'middle name': "Ram",
  ward_no: 2,
  municipality: "Buddhabhumi",
  drink: false,
  greet: function () {
    console.log("Good Morning dear!");

  }
}

// myObject.greet();
// console.log(myObject.firstName);


//We can change the values of the keys of the property
myObject.lastName = "Kuwar";
// console.log(myObject.lastName);

//To access the property we can also use the bracket notation
// console.log(myObject['middle name']);


//--------------------------- using new word --------------------------
let secondObject = new Object();
//This creates the new object with no property
secondObject.fruit = "Banana";
secondObject.number = 100;
secondObject.gender = "Male";
secondObject.degree = "Doctorate";
secondObject.signUp = false;

// console.log(secondObject);

// console.log(typeof secondObject);
// console.log(secondObject.hasOwnProperty('gender'));

//This will return false as the 'member' property does not belong to the object.
// console.log(secondObject.hasOwnProperty('member'));



//------------------------------using constructor function ----------------
function Campus(name, address, area, principal, ward) {
  this.name = name;
  this.address = address;
  this.area = area;
  this.principal = principal;
  this.ward = ward;

  this.changeWard = function (newWard) {
    this.ward = newWard;
    return `The new ward number of my campus is ${this.ward}`
  }
}

//By using the constructor function, we can create multiple objects
let campus1 = new Campus("Amrit", "Lainchaur", 200, "Arbind", 17);
let campus2 = new Campus("Saraswati", "Thamel", 500, "Hem Raj", 20);

// console.log(campus1.principal)
console.log(campus2.changeWard(20));
